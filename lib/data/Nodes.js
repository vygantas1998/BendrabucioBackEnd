"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeField = exports.nodeInterface = exports.ShowerReservationConnection = exports.showerReservationType = exports.ShowerConnection = exports.showerType = exports.WashingMashineReservationConnection = exports.washingMashineReservationType = exports.WashingMachineConnection = exports.GraphQLWashingMachineEdge = exports.washingMachineType = void 0;

var _graphqlRelay = require("graphql-relay");

var _graphql = require("graphql");

var _types = require("./interfaces/types");

var _database = require("./model/database");

var _nodeDefinitions = (0, _graphqlRelay.nodeDefinitions)(function (globalId) {
  var _fromGlobalId = (0, _graphqlRelay.fromGlobalId)(globalId),
      type = _fromGlobalId.type,
      id = _fromGlobalId.id;

  switch (type) {
    case "WashingMachine":
      return (0, _database.getOne)(id, "washing_machine");

    case "Shower":
      (0, _database.getOne)(id, "shower").then(function (res) {
        console.log(res);
      });
      return (0, _database.getOne)(id, "shower");

    case "ShowerReservation":
      return (0, _database.getOne)(id, "shower_reservation");

    case "WashingMachine":
      return (0, _database.getOne)(id, "washing_machine_reservation");
  }

  return null;
}, function (obj) {
  // TODO - fix this
  if (obj instanceof _types.WashingMachine) {
    return washingMachineType;
  } else if (obj instanceof _types.Shower) {
    return showerType;
  } else if (obj instanceof _types.ShowerReservation) {
    return showerReservationType;
  } else if (obj instanceof _types.WashingMachineReservation) {
    return washingMashineReservationType;
  }

  return null;
}),
    nodeInterface = _nodeDefinitions.nodeInterface,
    nodeField = _nodeDefinitions.nodeField;

exports.nodeField = nodeField;
exports.nodeInterface = nodeInterface;
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
  isTypeOf: function isTypeOf() {
    return "WashingMachine";
  },
  interfaces: [nodeInterface]
});
exports.washingMachineType = washingMachineType;

var _connectionDefinition = (0, _graphqlRelay.connectionDefinitions)({
  name: "WashingMachine",
  nodeType: washingMachineType
}),
    WashingMachineConnection = _connectionDefinition.connectionType,
    GraphQLWashingMachineEdge = _connectionDefinition.edgeType;

exports.GraphQLWashingMachineEdge = GraphQLWashingMachineEdge;
exports.WashingMachineConnection = WashingMachineConnection;
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
  isTypeOf: function isTypeOf() {
    return "Shower";
  },
  interfaces: [nodeInterface]
});
exports.showerType = showerType;

var _connectionDefinition2 = (0, _graphqlRelay.connectionDefinitions)({
  name: "Shower",
  nodeType: showerType
}),
    ShowerConnection = _connectionDefinition2.connectionType;

exports.ShowerConnection = ShowerConnection;
var showerReservationType = new _graphql.GraphQLObjectType({
  name: "ShowerReservation",
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)("ShowerReservation"),
      shower_id: {
        type: _graphql.GraphQLString
      },
      reservation_start_time: {
        type: _graphql.GraphQLString
      },
      reservation_end_time: {
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
  isTypeOf: function isTypeOf() {
    return "ShowerReservation";
  },
  interfaces: [nodeInterface]
});
exports.showerReservationType = showerReservationType;

var _connectionDefinition3 = (0, _graphqlRelay.connectionDefinitions)({
  name: "ShowerReservation",
  nodeType: showerReservationType
}),
    ShowerReservationConnection = _connectionDefinition3.connectionType;

exports.ShowerReservationConnection = ShowerReservationConnection;
var washingMashineReservationType = new _graphql.GraphQLObjectType({
  name: "WashingMashineReservation",
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)("WashingMashineReservation"),
      washingMashine_id: {
        type: _graphql.GraphQLString
      },
      reservation_start_time: {
        type: _graphql.GraphQLString
      },
      reservation_end_time: {
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
  isTypeOf: function isTypeOf() {
    return "WashingMashineReservation";
  },
  interfaces: [nodeInterface]
});
exports.washingMashineReservationType = washingMashineReservationType;

var _connectionDefinition4 = (0, _graphqlRelay.connectionDefinitions)({
  name: "WashingMashineReservation",
  nodeType: washingMashineReservationType
}),
    WashingMashineReservationConnection = _connectionDefinition4.connectionType;

exports.WashingMashineReservationConnection = WashingMashineReservationConnection;