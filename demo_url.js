var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2018&month=may';
var q = url.parse(adr, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.html'
console.log(q.search); // returns '?year=2018&month=may'

var qData = q.query; // returns an object: {year: 2018, month: 'may'}
console.log(qData.month); // returns 'may'