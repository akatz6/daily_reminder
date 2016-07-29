var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ToDoSchema = new mongoose.Schema({
	name: {"type":String, required:true, minlength: 1},
	date: {"type":Date, required:true},
	item: {"type":String, required:true, minlength: 5},
})

var LoginSchema = new mongoose.Schema({
	name: {"type":String, required:true, minlength: 1, unique: true},
	password: {"type":String, required:true, minlength: 4},
})



var Todo  = mongoose.model('Todo', ToDoSchema);
var Login  = mongoose.model('Login', LoginSchema);