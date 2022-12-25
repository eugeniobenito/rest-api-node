const handleHttp = (res, error, code = 500) => {
    res.status(code).send({ error });
}; 

module.exports = {
    handleHttp
};