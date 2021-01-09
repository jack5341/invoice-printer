const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080
app.listen(PORT)