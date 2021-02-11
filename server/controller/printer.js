const jwt = require("jsonwebtoken")
const puppeteer = require("puppeteer")
const fs = require("fs")

module.exports.Invoice = async (req, res) => {
    const decodedtoken = jwt.decode(req.body.token)
    // Must be headless for print page by PDF
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/layout/invoice/' + req.body.token, {
        waitUntil: "networkidle2"
    });
    await page.pdf({ path: 'process-file.pdf', format: 'A4' }).catch(err => console.log(err));
    res.send({
        process: true,
        file: fs.readFileSync('process-file.pdf', {encoding: 'base64'}),
        filename: decodedtoken.Company
    })
}


module.exports.Layout = (req, res) => {
    const decodedtoken = jwt.decode(req.params["*"])
    res.view("/views/layout-invoice.ejs", {invoice_info: decodedtoken})
}