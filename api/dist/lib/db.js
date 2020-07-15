"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.db = void 0;

var _client = require("@prisma/client");

// See https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md#constructor
// for options.
const db = new _client.PrismaClient();
exports.db = db;