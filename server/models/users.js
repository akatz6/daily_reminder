var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ToDoSchema = new mongoose.Schema({
	name: {"type":String, required:true, minlength: 1},
	date: {"type":Date, required:true},
	item: {"type":String, required:true, minlength: 5},
})



var Todo  = mongoose.model('Todo', ToDoSchema);