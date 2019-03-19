"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowerReservationConnection = exports.showerReservationType = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _Node = require("../interfaces/Node");

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
  interfaces: [_Node.nodeInterface]
});
exports.showerReservationType = showerReservationType;

var _connectionDefinition = (0, _graphqlRelay.connectionDefinitions)({
  name: "ShowerReservation",
  nodeType: showerReservationType
}),
    ShowerReservationConnection = _connectionDefinition.connectionType;

exports.ShowerReservationConnection = ShowerReservationConnection;