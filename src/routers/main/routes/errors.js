exports.notFound = (req, res) => {
    res.status(404).send("404 page Not found")


}
exports.serverError = function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
}



