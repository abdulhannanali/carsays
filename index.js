var fs = require("fs")
var Table = require("cli-table")
var colors = require("colors")

var table = new Table({
	head: [process.argv.splice(2).join(" ").substr(140)]
})

console.log(fs.readFileSync("./car.ascii").toString())
console.log(table.toString())
console.log("\n\nNote: text is limited to 140 chars" .rainbow)
console.log("As they, say it\n We dreamed of flying cars and instead we got 140 characters" .cyan)