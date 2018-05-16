// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to server');
	}
	console.log('Connected to MongoDB server');

	//deletemany
	// db.collection('Todos').deleteMany({text: 'walk the dog'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'walk the dog'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({name: 'mike'}).then((result) => {
		console.log(result);
	});

	//deletemany
	db.collection('Users').deleteMany({name: 'adam'}).then((result) => {
		console.log(result);
	});


	//db.close();
});