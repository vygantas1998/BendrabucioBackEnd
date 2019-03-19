"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowerConnection = exports.showerType = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _Node = require("../interfaces/Node");

var showerType = new _graphql.GraphQLObjectType({
  name: "Shower",
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)("Shower"),
      type: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      },
      created_at: {
        type: _graphql.GraphQLString
      },
      updated_at: {
        type: _graphql.GraphQLString
      }
    };
  },
  interfaces: [_Node.nodeInterface]
});
exports.showerType = showerType;

var _connectionDefinition = (0, _graphqlRelay.connectionDefinitions)({
  name: "Shower",
  nodeType: showerType
}),
    ShowerConnection = _connectionDefinition.connectionType;

exports.ShowerConnection = ShowerConnection;