"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _database = require("../../model/database");

var _Nodes = require("../../Nodes");

var storeType = new _graphql.GraphQLObjectType({
  name: "Store",
  intefaces: [_Nodes.nodeInterface],
  fields: function fields() {
    return {
      washingMachines: {
        type: new _graphql.GraphQLNonNull(_Nodes.WashingMachineConnection),
        args: _graphqlRelay.connectionArgs,
        resolve: function resolve(_, args) {
          return (0, _graphqlRelay.connectionFromPromisedArray)((0, _database.getAll)("washing_machine"), args);
        }
      },
      showers: {
        type: new _graphql.GraphQLNonNull(_Nodes.ShowerConnection),
        args: _graphqlRelay.connectionArgs,
        resolve: function resolve(_, args) {
          return (0, _graphqlRelay.connectionFromPromisedArray)((0, _database.getAll)("shower"), args);
        }
      },
      showerReservations: {
        type: new _graphql.GraphQLNonNull(_Nodes.ShowerReservationConnection),
        args: _graphqlRelay.connectionArgs,
        resolve: function resolve(_, args) {
          return (0, _graphqlRelay.connectionFromPromisedArray)((0, _database.getAll)("shower_reservation"), args);
        }
      },
      washingMachineReservations: {
        type: new _graphql.GraphQLNonNull(_Nodes.WashingMachineReservationConnection),
        args: _graphqlRelay.connectionArgs,
        resolve: function resolve(_, args) {
          return (0, _graphqlRelay.connectionFromPromisedArray)((0, _database.getAll)("washing_machine_reservation"), args);
        }
      }
    };
  }
});
var _default = storeType;
exports.default = _default;