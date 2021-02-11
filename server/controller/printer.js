const jwt = require("jsonwebtoken")
const puppeteer = require("puppeteer")

module.exports.Invoice = async (req, res) => {
    // Must be headless for print page by PDF
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/layout/invoice/' + req.body.token, {
        waitUntil: "networkidle2"
    });
    await page.pdf({ path: 'process-file.pdf', format: 'A4' }).catch(err => console.log(err)) ;
}


module.exports.Layout = async(req, res) => {
    const decodedtoken = jwt.decode(req.params["*"])
    console.log(decodedtoken)
    res.view("/views/layout-invoice.ejs", {invoice_info: decodedtoken})
}