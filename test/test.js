var rander = require('rander');
var should = require('should');
var assert = require('assert');
var safepass = require('../index');

describe('safepass module test', function () {
  var passwords = [];
  var hashes;
  var count = 10;
  
  before(function (done) {
    for (var i = 0; i < count; i++) {
      passwords.push(rander.string(10));
    }
    // console.log(passwords);
    done();
  });

  it('should hash password', function () {
    hashes = passwords.map(function (pass) {
      var hash = safepass.hash(pass);
      assert.ok(hash.indexOf('.') > 1);
      assert.ok(hash.length > pass.length);
      assert.ok(typeof hash == 'string');
      return safepass.hash(pass);
    });
    // console.log(hashes);
  });
  
  it('isValid function should work', function () {
    hashes.forEach(function (hash, i) {
      assert.ok(safepass.isValid(passwords[i], hash));
    });
  });
});