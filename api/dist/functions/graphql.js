"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handler = void 0;

var _api = require("@redwoodjs/api");

var _auth = require("../lib/auth.js");

var _db = require("../lib/db");

const schemas = {};
const services = {};
const handler = (0, _api.createGraphQLHandler)({
  getCurrentUser: _auth.getCurrentUser,
  schema: (0, _api.makeMergedSchema)({
    schemas,
    services: (0, _api.makeServices)({
      services
    })
  }),
  db: _db.db
});
exports.handler = handler;