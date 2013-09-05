var safepass = require('../index');
var password = 'hello world 123';
var max = 50;

function print () {
  var hash = safepass.hash(password);
  console.log(hash +  ' | ' + safepass.isValid(password, hash));
}

do {
  print();
} while ( --max > 0 );