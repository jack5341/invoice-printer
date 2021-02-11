const app = require('fastify')()

// Middlewares
app.register(require('fastify-cors'))
app.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs')
    }
})

// Routes
const printRoutes = require("./router/print")
printRoutes.forEach((route,index) => {
    app.route(route)
}) 

app.get('/', function (req, reply) {
    reply.send("Invoice Printer (Server-Side)")
})

// Port
const PORT = process.env.PORT || 8080
app.listen(PORT, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    console.log(`server listening on ${address}`)
})