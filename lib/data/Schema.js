"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _Mutation = _interopRequireDefault(require("./types/Mutation"));

var _Query = _interopRequireDefault(require("./types/main/Query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = new _graphql.GraphQLSchema({
  query: _Query.default,
  mutation: _Mutation.default
});
var _default = Schema;
exports.default = _default;