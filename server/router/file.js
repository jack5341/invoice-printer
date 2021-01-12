const router = require("express").Router()
const multer = require("multer")

// Controllers
const extension = require("../controller/extensions")

var upload = multer({ desk: "../" })

router.post("/routing-file-extension", upload.single('document'), (req,res) => {

    const file = req.files.document

    if (!file) {
      return res.send({
          process: false,
          message: "Invalid Extension"
      })
    }

    const regex = /(docx?|xlsx?|pdf|rar|zip|7z)/gm
    const fileExtension = regex.exec(file.name)[0]

    if(fileExtension == null){
        res.send("Invalid File Extension")
        res.end()
    }
     
    file.mv('./' + 'process-file.' + fileExtension);

    switch (fileExtension) {
        case "docx":
            console.log("docx");
            break
        case "xlsx":
            console.log("xlsx");
            break
    }
    
})

router.post("/routing-file-extension/docx", extension.DOCX)
router.post("/routing-file-extension/xls", extension.XLSX)

module.exports = router