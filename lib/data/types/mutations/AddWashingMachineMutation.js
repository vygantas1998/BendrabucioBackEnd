"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddWashingMachineMutation = void 0;

var _graphqlRelay = require("graphql-relay");

var _graphql = require("graphql");

var _Nodes = require("../../Nodes");

var _database = require("../../model/database");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AddWashingMachineMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'AddWashingMachine',
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
    washingMachineEdge: {
      type: new _graphql.GraphQLNonNull(_Nodes.GraphQLWashingMachineEdge),
      resolve: function () {
        var _resolve = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(_ref) {
          var washingMachineId, washingMachine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  washingMachineId = _ref.washingMachineId;
                  _context.t0 = _database.getOne;
                  _context.next = 4;
                  return washingMachineId;

                case 4:
                  _context.t1 = _context.sent;
                  _context.next = 7;
                  return (0, _context.t0)(_context.t1, "washing_machine");

                case 7:
                  washingMachine = _context.sent;
                  _context.t2 = _graphqlRelay.cursorForObjectInConnection;
                  _context.t3 = _toConsumableArray;
                  _context.next = 12;
                  return (0, _database.getAll)("washing_machine");

                case 12:
                  _context.t4 = _context.sent;
                  _context.t5 = (0, _context.t3)(_context.t4);
                  _context.t6 = washingMachine;
                  _context.t7 = (0, _context.t2)(_context.t5, _context.t6);
                  _context.t8 = washingMachine;
                  return _context.abrupt("return", {
                    cursor: _context.t7,
                    node: _context.t8
                  });

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function resolve(_x) {
          return _resolve.apply(this, arguments);
        }

        return resolve;
      }()
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload(data) {
    var washingMachineId = (0, _database.addOne)(data, "washing_machine");
    return {
      washingMachineId: washingMachineId
    };
  }
});
exports.AddWashingMachineMutation = AddWashingMachineMutation;