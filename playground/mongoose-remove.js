const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');


//remove all records
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

//remove one
//Todo.findOneAndRemove({_id: '5afebad4657cf1f766f1f7ca' })

//remove by ID
Todo.findByIdAndRemove('5afebad4657cf1f766f1f7ca').then((todo) => 
{
	console.log(todo);
});