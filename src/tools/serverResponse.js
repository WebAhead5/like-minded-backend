

exports.sendError= (res, {message , status})=>{

    res.status(200).json({
        status:status,
        message,
        ok: false
    })

}

exports.sendData= (res, {data, message,status = 200})=>{

    res.status(200).json({
        status:status,
        data,
        message,
        ok: true
    })

}


