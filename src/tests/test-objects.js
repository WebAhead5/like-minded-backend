

exports.userProfile =  { id: 1, userid: 1, firstname: 'James', lastname: 'Daniels', gender: 'male', status: 'Single', bio: 'Learning web-dev in the blazing Haifa heat.', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', subphotos: [ 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4' ] }


exports.message1 = {
    id: 1,
    senderUserId: 1,
    recipUserId: 2,
    message: 'Hey there',
    timeAndDate: "2020-05-01T12:07:35.000Z"
}

exports.userRelationship1and2 = { id: 1, userId1: 1, userId2: 2, 'user1-towards-user2': 'like', 'user2-towards-user1': 'like' }

exports.relationshipsWhereUserStatus = { id: 1, userId1: 1, userId2: 2, 'user1-towards-user2': 'like', 'user2-towards-user1': 'like' }, { id: 2, userId1: 1, userId2: 3, 'user1-towards-user2': 'like', 'user2-towards-user1': 'none' }

exports.relationshipBetweenUserAndCandidate = [ { id: 1, userId1: 1, userId2: 2, 'user1-towards-user2': 'like', 'user2-towards-user1': 'like' } ]