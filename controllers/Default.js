'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.apiCreate_userOPTIONS = function apiCreate_userOPTIONS (req, res, next) {
  Default.apiCreate_userOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiFund_investmentsGET = function apiFund_investmentsGET (req, res, next, customHeader, fundCode, baseFundCode) {
  Default.apiFund_investmentsGET(customHeader, fundCode, baseFundCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiFund_investmentsOPTIONS = function apiFund_investmentsOPTIONS (req, res, next) {
  Default.apiFund_investmentsOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLogoutOPTIONS = function apiLogoutOPTIONS (req, res, next) {
  Default.apiLogoutOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserGET = function apiUserGET (req, res, next, customHeader) {
  Default.apiUserGET(customHeader)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserOPTIONS = function apiUserOPTIONS (req, res, next) {
  Default.apiUserOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUser_investmentsGET = function apiUser_investmentsGET (req, res, next, customHeader) {
  Default.apiUser_investmentsGET(customHeader)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUser_investmentsOPTIONS = function apiUser_investmentsOPTIONS (req, res, next) {
  Default.apiUser_investmentsOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUser_messagesGET = function apiUser_messagesGET (req, res, next, customHeader) {
  Default.apiUser_messagesGET(customHeader)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUser_messagesOPTIONS = function apiUser_messagesOPTIONS (req, res, next) {
  Default.apiUser_messagesOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUser_totalsGET = function apiUser_totalsGET (req, res, next, customHeader) {
  Default.apiUser_totalsGET(customHeader)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUser_totalsOPTIONS = function apiUser_totalsOPTIONS (req, res, next) {
  Default.apiUser_totalsOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
