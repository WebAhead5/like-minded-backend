const dbConnection = require("../database/dbconnection");
const userProfileModel = require("./userProfile.model");
const userSettingsModel = require("./userSettings.model");

exports.login = async (googleProfile)=> {
    if (!googleProfile)
        throw new Error("no googleProfile was provided")

    let res = await dbConnection.query(`select * from auth where "googleId" = $1 `, [googleProfile.id])

    //register a new user
    if(res.rowCount === 0) {
        try {

            let userId = await dbConnection.query(`insert into auth ("googleId")
                                                   values ($1)
                                                   returning id`, [googleProfile.id]);
            userId = userId.rows[0].id
            let userProfileFields = {
                userId, firstName: googleProfile.name.givenName, lastName:googleProfile.name.familyName
            };
            if( googleProfile.gender)
                userProfileFields.gender= googleProfile.gender;

            await userProfileModel.add(userProfileFields);
            await userSettingsModel.add({userId});
            return userId;

        } catch (e) {
            await dbConnection.query(`delete
                                      from auth
                                      where "googleId" = $1`, [googleProfile.id]);
            throw e;
        }

    }

    //user found
    else if(res.rowCount === 1)
        return res.rows[0].id;

    //more than oe user were found
    else throw new Error("more than one users are registered under the same google id, please contact the support team")

}