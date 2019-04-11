"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddWashingMashineMutation = void 0;

var _graphqlRelay = require("graphql-relay");

var _graphql = require("graphql");

var _Nodes = require("../../Nodes");

var _database = require("../../model/database");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var AddWashingMashineMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'AddWashingMashine',
  inputFields: {
    title: {
      type: _graphql.GraphQLString
    },
    image_url: {
      type: _graphql.GraphQLString
    },
    description: {
      type: _graphql.GraphQLString
    }
  },
  outputFields: {
    washingMashineEdge: {
      type: new _graphql.GraphQLNonNull(_Nodes.GraphQLWashingMachineEdge),
      resolve: function resolve(_ref) {
        var washingMashineId = _ref.washingMashineId;
        var washingMashine = (0, _database.getOne)(washingMashineId, "washing_machine");
        return {
          cursor: (0, _graphqlRelay.cursorForObjectInConnection)(_toConsumableArray((0, _database.getAll)("washing_machine")), washingMashine),
          node: washingMashine
        };
      }
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload(data) {
    var washingMashineId = (0, _database.addOne)(data, "washing_machine");
    return {
      washingMashineId: washingMashineId
    };
  }
});
exports.AddWashingMashineMutation = AddWashingMashineMutation;