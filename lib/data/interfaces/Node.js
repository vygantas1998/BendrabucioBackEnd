"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeField = exports.nodeInterface = void 0;

var _graphqlRelay = require("graphql-relay");

var _WashingMachine = require("../model/WashingMachine");

var _WashingMachine2 = require("../types/WashingMachine");

var _nodeDefinitions = (0, _graphqlRelay.nodeDefinitions)(function (globalId) {
  var _fromGlobalId = (0, _graphqlRelay.fromGlobalId)(globalId),
      type = _fromGlobalId.type,
      id = _fromGlobalId.id;

  if (type === "WashingMachine") {
    return (0, _WashingMachine.getWashingMachine)(id);
  }

  return null;
}, function (obj) {
  // TODO - fix this
  if (obj instanceof WashingMachine) {
    return _WashingMachine2.washingMachineType;
  }

  return null;
}),
    nodeInterface = _nodeDefinitions.nodeInterface,
    nodeField = _nodeDefinitions.nodeField;

exports.nodeField = nodeField;
exports.nodeInterface = nodeInterface;