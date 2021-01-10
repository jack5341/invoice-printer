const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const multer = require("multer")
const fileUpload = require('express-fileupload');
const app = express()

app.use(fileUpload());
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}))
   
var upload = multer({ desk: "/upload" })

app.post("/test", upload.single('document') , (req,res,next) => {
    const file = req.files.document
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }

    file.mv('./uploads/' + file.name);
}) 

const PORT = process.env.PORT || 8080
app.listen(PORT)