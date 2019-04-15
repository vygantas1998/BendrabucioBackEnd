"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _AddShowerMutation = require("./mutations/AddShowerMutation");

var _AddWashingMachineMutation = require("./mutations/AddWashingMachineMutation");

var _AddShowerReservationMutation = require("./mutations/AddShowerReservationMutation");

var mutationType = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addWashingMachine: _AddWashingMachineMutation.AddWashingMachineMutation,
    addShower: _AddShowerMutation.AddShowerMutation,
    addWashingMachineReservation: _AddShowerReservationMutation.AddShowerReservationMutation,
    addShowerReservation: _AddShowerReservationMutation.AddShowerReservationMutation
  }
});
var _default = mutationType;
exports.default = _default;