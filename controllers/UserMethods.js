'use strict';

var utils = require('../utils/writer.js');
var UserMethods = require('../service/UserMethodsService');

module.exports.apiCreate_userPOST = function apiCreate_userPOST (req, res, next, body) {
  UserMethods.apiCreate_userPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLoginPOST = function apiLoginPOST (req, res, next, body) {
  UserMethods.apiLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLogoutGET = function apiLogoutGET (req, res, next, customHeader, authorization) {
  UserMethods.apiLogoutGET(customHeader, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
