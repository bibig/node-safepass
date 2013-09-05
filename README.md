# node-safepass

+ A mini Node.js module to hash password with random string salt.

## Usage

```javascript
var safepass = require("safepass");

// hash password
safepass.hash(password);

// check password
safepass.isValid(password, hashstring);

```