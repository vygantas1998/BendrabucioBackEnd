"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddShowerReservationMutation = void 0;

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

var AddShowerReservationMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'AddShowerReservation',
  inputFields: {
    shower_id: {
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
    showerReservationEdge: {
      type: new _graphql.GraphQLNonNull(_Nodes.GraphQLShowerReservationEdge),
      resolve: function () {
        var _resolve = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(_ref) {
          var showerReservationId, showerReservation;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  showerReservationId = _ref.showerReservationId;
                  _context.t0 = _database.getOne;
                  _context.next = 4;
                  return showerReservationId;

                case 4:
                  _context.t1 = _context.sent;
                  _context.next = 7;
                  return (0, _context.t0)(_context.t1, "shower_reservation");

                case 7:
                  showerReservation = _context.sent;
                  _context.t2 = _graphqlRelay.cursorForObjectInConnection;
                  _context.t3 = _toConsumableArray;
                  _context.next = 12;
                  return (0, _database.getAll)("shower_reservation");

                case 12:
                  _context.t4 = _context.sent;
                  _context.t5 = (0, _context.t3)(_context.t4);
                  _context.t6 = showerReservation;
                  _context.t7 = (0, _context.t2)(_context.t5, _context.t6);
                  _context.t8 = showerReservation;
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
    var showerReservationId = (0, _database.addOne)(data, "shower_reservation");
    return {
      showerReservationId: showerReservationId
    };
  }
});
exports.AddShowerReservationMutation = AddShowerReservationMutation;