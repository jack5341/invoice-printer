const jwt = require("jsonwebtoken")

module.exports.Invoice = async(req, res) => {
    const objectInvoice = jwt.decode(req.body.token)
}
