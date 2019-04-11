"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _AddWashingMashineMutation = require("./mutations/AddWashingMashineMutation");

var mutationType = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addWashingMachine: _AddWashingMashineMutation.AddWashingMashineMutation
  }
});
var _default = mutationType;
exports.default = _default;