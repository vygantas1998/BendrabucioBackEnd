"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddWashingMachineReservationMutation = void 0;

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

var AddWashingMachineReservationMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'AddWashingMachineReservation',
  inputFields: {
    washingMachine_id: {
      type: _graphql.GraphQLString
    },
    reservation_start_time: {
      type: _graphql.GraphQLString
    },
    reservation_end_time: {
      type: _graphql.GraphQLString
    }
  },
  outputFields: {
    washingMachineReservationEdge: {
      type: new _graphql.GraphQLNonNull(_Nodes.GraphQLWashingMachineReservationEdge),
      resolve: function () {
        var _resolve = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(_ref) {
          var washingMachineReservationId, washingMachineReservation;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  washingMachineReservationId = _ref.washingMachineReservationId;
                  _context.t0 = _database.getOne;
                  _context.next = 4;
                  return washingMachineReservationId;

                case 4:
                  _context.t1 = _context.sent;
                  _context.next = 7;
                  return (0, _context.t0)(_context.t1, "washing_machine_reservation");

                case 7:
                  washingMachineReservation = _context.sent;
                  _context.t2 = _graphqlRelay.cursorForObjectInConnection;
                  _context.t3 = _toConsumableArray;
                  _context.next = 12;
                  return (0, _database.getAll)("washing_machine_reservation");

                case 12:
                  _context.t4 = _context.sent;
                  _context.t5 = (0, _context.t3)(_context.t4);
                  _context.t6 = washingMachineReservation;
                  _context.t7 = (0, _context.t2)(_context.t5, _context.t6);
                  _context.t8 = washingMachineReservation;
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
    var washingMachineReservationId = (0, _database.addOne)(data, "washing_machine_reservation");
    return {
      washingMachineReservationId: washingMachineReservationId
    };
  }
});
exports.AddWashingMachineReservationMutation = AddWashingMachineReservationMutation;