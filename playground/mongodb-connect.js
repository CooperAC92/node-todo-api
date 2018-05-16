// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err){
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//insert new doc into Users collec (name, age, location)

	// db.collection('Users').insertOne({
	// 	name: 'adam',
	// 	age: 26,
	// 	location: 'southport'
	// }, (err, result) => {
	// 	if (err){
	// 		return console.log('Unable to insert user', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// });

	db.close();
});