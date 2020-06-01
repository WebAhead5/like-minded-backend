const serverResponse = require("../../../tools/serverResponse")


exports.notFound = (req, res) => {
    serverResponse.sendError(res,{message: "page not found", status:404})

}
exports.serverError = function (err, req, res, next) {

    serverResponse.sendError(res,{message: err, status:500})
}



