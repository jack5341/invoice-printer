const xlsx = require("node-xlsx")
const csv = require('@fast-csv/parse')
const fs = require("fs")

exports.XLSX = () => {
    const parsedRaw = xlsx.parse("./process-file.xlsx")
    return parsedRaw[0].data
}

exports.CSV = () =>  {
    fs.createReadStream('./process-file.csv')
    .pipe(csv.parse())
    .on('data')
    .on('end', () => {
        console.log("CSV file successfully processed")
    })
}