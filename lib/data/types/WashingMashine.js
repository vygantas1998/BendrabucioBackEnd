"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WashingMachineConnection = exports.washingMachineType = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _Node = require("../interfaces/Node");

var washingMachineType = new _graphql.GraphQLObjectType({
  name: "WashingMachine",
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)("WashingMachine"),
      title: {
        type: _graphql.GraphQLString
      },
      image_url: {
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
exports.washingMachineType = washingMachineType;

var _connectionDefinition = (0, _graphqlRelay.connectionDefinitions)({
  name: "WashingMachine",
  nodeType: washingMachineType
}),
    WashingMachineConnection = _connectionDefinition.connectionType;

exports.WashingMachineConnection = WashingMachineConnection;