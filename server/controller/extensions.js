const xlsx = require('node-xlsx');

exports.XLSX = (req,res) => {

    var obj = xlsx.parse(__dirname + '/process-file.xlsx')
    res.end()

}

exports.DOCX = (req,res) => {
    console.log(true)
}