// Controller
const print = require("../controller/printer")

const routes = [{
    method: "POST",
    url: "/print/invoice/",
    handler: print.Invoice
},
{
    method: "GET",
    url: "/layout/invoice/*",
    handler: print.Layout
}
]

module.exports = routes
