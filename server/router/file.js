const router = require("express").Router()
const multer = require("multer")

// Controllers
const extension = require("../controller/extensions")

var upload = multer({ desk: "../" })

router.post("/extension-separator", upload.single('document'), async(req,res) => {

    const file = await req.files.document

    if (!file) {
      res.send({
          process: false,
          message: "Invalid Extension"
      })
      res.end()
    }

    const regex = /(xlsx|csv?)/gm
    const fileExtension = regex.exec(file.name)[0]

    if(fileExtension == null){
        res.send("Invalid File Extension")
        res.end()
    }
     
    await file.mv('./' + 'process-file.' + fileExtension);

    switch (fileExtension) {
        case "xlsx":
            res.send({
                process: true,
                type: "xlsx",
                parsedArray: extension.XLSX()
            })
            res.end()
            break;
        
        case "csv":
            res.send({
                process: true,
                type: "csv",
                parsedArray: extension.CSV()
            })
            res.end()
            break;

        default:
            break;
    }
})

module.exports = router