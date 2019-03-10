"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _WashingMachine = require("../model/WashingMachine");

var _WashingMachine2 = require("./WashingMachine");

var _Node = require("../interfaces/Node");

var storeType = new _graphql.GraphQLObjectType({
  name: "Store",
  intefaces: [_Node.nodeInterface],
  fields: function fields() {
    return {
      washingMachines: {
        type: new _graphql.GraphQLNonNull(_WashingMachine2.WashingMachineConnection),
        args: _graphqlRelay.connectionArgs,
        resolve: function resolve(_, args) {
          return (0, _graphqlRelay.connectionFromPromisedArray)((0, _WashingMachine.getWashingMachines)(), args);
        }
      }
    };
  }
});
var _default = storeType;
exports.default = _default;