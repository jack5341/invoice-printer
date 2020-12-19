const cors = require("cors")
const express = require("express")
const puppeteer = require('puppeteer');
const app = express()

app.use(cors())
app.use(express.json())

app.get("/getusers", (req,res) => {
    const users = require("./users.json")
    res.send(users)
    res.end()
})

app.post("/takescreenshot", async(req,res) => {
    console.log()
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.body.path, {waitUntil: 'networkidle2'});
    await page.pdf({path: req.body.company + '.pdf', format: 'A4'});
    await browser.close()
    res.send("Succesfully saved on " + "./server/" + req.body.company
    + '.pdf'
    )
    res.end()
})

app.listen(8080)