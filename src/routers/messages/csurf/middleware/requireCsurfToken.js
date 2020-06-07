const csrf = require("csurf")
const csrfProtection = csrf({ cookie: true })
const serverRes = require("../../../tools/serverResponse")



module.exports = [
    (req,res,next)=>{
       if(req.body._csrf === undefined)
           return serverRes.sendError(res,{message: "message"})

        next();

    },
    csrfProtection
]