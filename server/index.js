const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.post("/test", (req,res) => {
    console.log(req.body)
    res.end()
}) 

const PORT = process.env.PORT || 8080
app.listen(PORT)