exports.hash = hash;
exports.isValid = isValid;

var rander = require('rander');
var crypto = require('crypto');

function md5 (str) {
	return crypto.createHash('md5').update(str).digest('hex');
}

function hash (pass, salt) {
  salt = salt || parseInt(rander.number(10)).toString(16);
  return salt + '.' + md5(pass + salt);
}

function isValid (pass, hashstring) {
  var salt = hashstring.split('.')[0];
  return hash(pass, salt) == hashstring;
}