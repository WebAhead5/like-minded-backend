const serverResponse = require("../../../tools/serverResponse")


exports.notFound = (req, res) => {
    serverResponse.sendError(res,{message: "page not found", status:404})

}
exports.serverError = function (err, req, res, next) {
    // if (err.code == 'EBADCSRFTOKEN')
        // return serverResponse.sendError(res,{message: 'csurf validation failed', status:500});

    serverResponse.sendError(res,{message: err, status:500})
}



