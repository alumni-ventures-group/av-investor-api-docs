'use strict';


/**
 * Login
 * Login investor user
 *
 * body LoginRequest 
 * returns LoginResponse
 **/
exports.apiLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "authToken" : "authToken",
  "user" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logout
 * Logout investor user
 *
 * authorization String User session specific token for authorization (optional)
 * returns LogoutResponse
 **/
exports.apiLogoutGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

