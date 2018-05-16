// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to server');
	}
	console.log('Connected to MongoDB server');

	//findoneandupdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5afc52bc657cf1f766f1d376')
	// },{
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5afc36e9752fe440d81e6d53')
	},{
		$set: {
			name: 'adam'
		},
		$inc: {
			age: 1,
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});