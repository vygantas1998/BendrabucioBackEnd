"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _Query = _interopRequireDefault(require("./types/Query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = new _graphql.GraphQLSchema({
  query: _Query.default
});
var _default = Schema;
exports.default = _default;