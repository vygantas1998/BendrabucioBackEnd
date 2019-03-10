"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _Store = _interopRequireDefault(require("./Store"));

var _Node = require("../interfaces/Node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryType = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: function fields() {
    return {
      store: {
        type: _Store.default,
        resolve: function resolve() {
          return {};
        }
      },
      node: _Node.nodeField
    };
  }
});
var _default = queryType;
exports.default = _default;