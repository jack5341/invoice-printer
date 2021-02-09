const puppeteer = require("puppeteer")

module.exports.printInvoice = async(req, res) => {
    res.send("router work succesfully !")
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com', {
      waitUntil: 'networkidle2',
    });
    await page.pdf({ path: 'hn.pdf', format: 'A4' });  
}