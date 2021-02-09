const app = require('fastify')({
    logger: true
})

const printRoutes = require("./router/print")
printRoutes.forEach((route,index) => {
    app.route(route)
}) 

const papersRoutes = require("./router/papers")
papersRoutes.forEach((route,index) => {
    app.route(route)
}) 

app.get('/', function (req, reply) {
    reply.send("Invoice Printer (Server-Side)")
})

const PORT = process.env.PORT || 8080
app.listen(PORT, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})