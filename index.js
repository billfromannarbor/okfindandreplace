const fs = require('fs')
const okfind=require("./okfindandreplace.js")

startingDirectory = process.argv[2];

if (!startingDirectory) {
  throw Error("A file to watch must be specified!");
}

console.log("Now Searching: " + startingDirectory + " for localization occurrences");

okfind.findAll(startingDirectory, function(error,files) {
	console.log("Found " + files.length + " files")
	})