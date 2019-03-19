"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _GetDataFromDb = require("../model/GetDataFromDb");

var _WashingMachine = require("./WashingMachine");

var _ShowerReservation = require("./ShowerReservation");

var _Shower = require("./Shower");

var _Node = require("../interfaces/Node");

var storeType = new _graphql.GraphQLObjectType({
  name: "Store",
  intefaces: [_Node.nodeInterface],
  fields: function fields() {
    return {
      washingMachines: {
        type: new _graphql.GraphQLNonNull(_WashingMachine.WashingMachineConnection),
        args: _graphqlRelay.connectionArgs,
        resolve: function resolve(_, args) {
          return (0, _graphqlRelay.connectionFromPromisedArray)((0, _GetDataFromDb.getAll)("washing_machine"), args);
        }
      }
      /*showers: {
          type: new GraphQLNonNull(ShowerConnection),
          args: connectionArgs,
          resolve: (_, args) =>
              connectionFromPromisedArray(
                  getAll("showers"),
                  args
              )
      },
      showerReservations: {
          type: new GraphQLNonNull(ShowerReservationConnection),
          args: connectionArgs,
          resolve: (_, args) =>
              connectionFromPromisedArray(
                  getAll("shower_reservation"),
                  args
              )
      }*/

    };
  }
});
var _default = storeType;
exports.default = _default;