const xlsx = require("node-xlsx")
const csv = require('@fast-csv/parse')
const fs = require("fs")

exports.XLSX = () => {
    const parsedRaw = xlsx.parse("./process-file.xlsx")
    return parsedRaw[0].data
}

exports.CSV = () =>  {
    return fs.readFileSync('./process-file.csv')
    .toString()
    .split('\n')
    .map(e => e.trim()) 
    .map(e => e.split(',').map(e => e.trim())); 
}