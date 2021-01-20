# Invoice-Printer
Fetch from XLSX (Excel) and CSV (Comma-separated values) **Row's**  and **Collum's** and convert to array.
**Then you can use it how you want !**

## Require Processing Process
Then what will happen after then i post  to `http://localhost:8080/api/extension-separator`.

A basic diagram for beginner's  

```mermaid
graph LR
A[/api/extension-separator] --> B
B["regex  =  /(xlsx|csv?)/gm"] -- If file extension xlsx --> C(extension.XLSX)
B -- If file extension csv --> D(extension.CSV)
D --> F(.)
C --> F(( parsedArray))
```

>  After i post to /api/extension-separator will filtering for file extension
> Then is what extension will go to that function
>With `parsedArray` will send to client side
#
> file.js - "/extension-separator"
```js
const regex = /(xlsx|csv?)/gm
	
// The element we want in the array is the last element on regex
const fileExtension = regex.exec(file.name)[0]

// If file extension is null
if(fileExtension == null){
	res.send("Invalid File Extension")
	res.end()
}

// Switch for xlsx and csv extensions
switch (fileExtension) {
	case "xlsx":
		res.send({
		// This boolean is for process is succesfully or not 
		process: true,
		type: "xlsx",
		parsedArray: extension.XLSX()
		})
		res.end()
	break;

	case "csv":
		res.send({
		// This boolean is for process is succesfully or not 
		process: true,
		type: "csv",
		parsedArray: extension.CSV()
		})
		res.end()
	break;
default:
break;
}
```

>extensions.js - CSV( ) XLSX( )
```js
const xlsx = require("node-xlsx")
const fs = require("fs")

exports.XLSX = () => {
// We parsing process-file.xlsx and define to parsedRaw
const parsedRaw = xlsx.parse("./process-file.xlsx")
return parsedRaw[0].data
}

exports.CSV = () => {
// Reading file process-file.csv with fs.readFileSync 
return fs.readFileSync('./process-file.csv')
	.toString()
	.split('\n')
	.map(e => e.trim())
	.map(e => e.split(',').map(e => e.trim()));
}
```
## How to install ( client-side )

> Clone this repository
```sh
git clone https://github.com/jack5341/invoice-printer.git
```
> Go to path
```sh
cd client
```
>Install node modules and start
```sh
npm install && npm start
```

or

```sh
yarn
```

## How to install ( server-side )
> Go to path
```sh
cd server
```
> Install node modules and start
```sh
npm install && npm start
```   

# What i used ? 
> On client-side 
- [x] React.js
- [x] Axios
> On server-side
- [x] Nodejs
- [x] Cors
- [x] Express
- [x] Multer
- [x] Morgan
- [x] [node-xlsx](https://www.npmjs.com/package/node-xlsx)
- [x] nodemon
- [x] body-parser
- [x] fs
