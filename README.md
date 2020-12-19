# PDF Demand Printer

Powered by React.js,Puppeteer and Nodejs Fast PDF demand printer

Your pdf's are saving to `/server` you can find them in there !

> Output sample

![Screenshot](https://raw.githubusercontent.com/jack5341/pdf-demand-printer/master/master/Screenshot.PNG)

## How to install 

-   Clone Repo
```sh
$ git clone https://github.com/jack5341/demand-print.git
```

- Install Dependencies
```sh
$ npm install 
```

or

```sh
$ yarn
```
> Same steps for Server Side "./server"
- Build
```sh
$ npm run build
```

or 

```sh
$ yarn build
```

## How did i use Puppeteer
```js
app.post("/takescreenshot", async(req,res) => {

	console.log()

	const  browser = await  puppeteer.launch();

	const  page = await  browser.newPage();

	await  page.goto(req.body.path, {waitUntil:  'networkidle2'});

	await  page.evaluate(() => {

	document.querySelector(".btn ").style="display:none"

	})

	await  page.pdf({path:  req.body.company + '.pdf', format:  'A4'});

	await  browser.close()

	res.send("Succesfully saved on " + "./server/" + req.body.company

	+ '.pdf'

	)

	res.end()

})
```
>Server side port is 8080
