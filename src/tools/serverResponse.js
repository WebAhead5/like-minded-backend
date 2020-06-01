

exports.sendError= (res, {message , status})=>{

    res.status(status || 404).json({
        status:404,
        message,
        ok: false
    })

}

exports.sendData= (res, {data, message})=>{

    res.status(200).json({
        status:200,
        data,
        message,
        ok: true
    })

}


