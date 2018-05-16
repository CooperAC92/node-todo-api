// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5afc329152c97b3188a50eaa')
	// }).toArray().then((docs) => {
	// 	console.log('todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('unable to fetch docs', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`todos count: ${count}`);
	// }, (err) => {
	// 	console.log('unable to fetch docs', err);
	// });

	db.collection('Users').find({name: 'adam'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('unable to fetch docs', err);
	});

	//db.close();
});