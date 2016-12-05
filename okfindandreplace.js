//Copyright 2016 OtherKitten.com - License Apache 2

"use strict"
const fs = require("fs")

exports.findAll = findAll



function findAll(baseDirectory, callback) {
	var list = []
	fs.readdir(baseDirectory,function(error, files) {
		callback(files)
	})
}