//Copy 2016 OtherKitten.com - License ISC

const csvToJSONTable = require("../index.js")
const assert = require("assert")
const util = require("util")

//This will be a test to find all instances of @"
//It will pull the prefix in the code and place them in a dictionary.
//The content of the dictionary will be the value of the string
//Find @" and pull out it's prefix and suffix
//Need the line number and the starting and ending columns
//Need the file name and it's path
//With this information, create a dictionary
//prefix - folder - file - (line number, column, suffix)

//Get all the files from a specified directory
//Setup, create a bunch of files and a bunch of directories
//Tear down, delete the files and directories

describe("Get all the files from a directory", function getFilesTest() {
	before("Setup the directories", function setupTheDirectories(done) {
		done()
	})
	before("Setup the files", function setupTheDirectories(done) {
		done()
	})

	
	it("Verifies that the directories are present", function verifyThatDirectoriesExist(done) {
		done(new Error("Not Implemented"))
	})	
	
	it("Verifies that the files are present", function verifyThatDirectoriesExist(done) {
		done(new Error("Not Implemented"))
	})	

	
	after( "Remove the directories", function deleteTheFilesAndDirectories(done) {
		done()
	})
	
	after( "Remove the files", function deleteTheFilesAndDirectories(done) {
		done()
	})
})

