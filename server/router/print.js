// Controller
const print = require("../controller/printengine")

const routes = [{
    method: "GET",
    url: "/print/invoice",
    handler: print.printInvoice
}]

module.exports = routes