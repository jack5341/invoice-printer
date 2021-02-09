// Controller
const layout = require("../controller/paperlayout")

const routes = [{
    method: "POST",
    url: "/layout/invoice",
    handler: layout.Invoice
}]

module.exports = routes