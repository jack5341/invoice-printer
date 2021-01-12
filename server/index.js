const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const fileUpload = require('express-fileupload');
const app = express()

app.use(fileUpload());
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}))

// Routing
app.use("/api", require("./router/file"))

const PORT = process.env.PORT || 8080
app.listen(PORT)