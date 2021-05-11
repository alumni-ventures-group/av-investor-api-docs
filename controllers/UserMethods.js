'use strict';

var utils = require('../utils/writer.js');
var UserMethods = require('../service/UserMethodsService');

module.exports.apiLoginPOST = function apiLoginPOST (req, res, next, body) {
  UserMethods.apiLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLogoutGET = function apiLogoutGET (req, res, next, authorization) {
  UserMethods.apiLogoutGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
