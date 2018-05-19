const {SHA256} = require('crypto-js');

// var message ='hello i am adam';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };
// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'secretsalt').toString()
// }

// var resultHash= SHA256(JSON.stringify(token.data) + 'secretsalt').toString();

// if(resultHash === token.hash) {
// 	console.log('Data was not changed.');
// } else {
// 	console.log('Data was changed');
// }

const jwt = require('jsonwebtoken');

var data = {
	id: 10
};

var token = jwt.sign(data, '123');
console.log(token);

var decoded = jwt.verify(token, '123');
console.log(decoded);