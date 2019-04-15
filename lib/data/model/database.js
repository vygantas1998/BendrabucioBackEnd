"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOne = exports.getOne = exports.getAll = void 0;

var _mariadb = _interopRequireDefault(require("mariadb"));

require("@babel/polyfill");

var _types = require("../interfaces/types");

var _v = _interopRequireDefault(require("uuid/v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pool = _mariadb.default.createPool({
  host: '5.79.67.193',
  user: 'uabdagva',
  password: 'uabdagva',
  database: 'bendrabutis',
  connectionLimit: 5
});

var getAll =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(table) {
    var conn, rows;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return pool.getConnection();

          case 2:
            conn = _context.sent;
            _context.next = 5;
            return conn.query("SELECT * FROM ".concat(table));

          case 5:
            rows = _context.sent;
            if (conn) conn.end();
            return _context.abrupt("return", rows);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAll(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getOne =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(id, table) {
    var conn, rows;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return pool.getConnection();

          case 2:
            conn = _context2.sent;
            _context2.next = 5;
            return conn.query("SELECT * FROM ".concat(table, " WHERE id='").concat(id, "'"));

          case 5:
            rows = _context2.sent;
            if (conn) conn.end();
            _context2.t0 = table;
            _context2.next = _context2.t0 === "shower" ? 10 : _context2.t0 === "shower_reservation" ? 11 : _context2.t0 === "washing_machine" ? 12 : _context2.t0 === "washing_machine_reservation" ? 13 : 14;
            break;

          case 10:
            return _context2.abrupt("return", new _types.Shower(rows[0]));

          case 11:
            return _context2.abrupt("return", new _types.ShowerReservation(rows[0]));

          case 12:
            return _context2.abrupt("return", new _types.WashingMachine(rows[0]));

          case 13:
            return _context2.abrupt("return", new _types.WashingMachineReservation(rows[0]));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getOne(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getOne = getOne;

var addOne =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(data, table) {
    var conn, keys, values, id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return pool.getConnection();

          case 2:
            conn = _context3.sent;
            keys = "";
            Object.keys(data).forEach(function (res, index) {
              keys += "".concat(res);

              if (index !== Object.keys(data).length - 1) {
                keys += ", ";
              }
            });
            values = "";
            Object.keys(data).forEach(function (res, index) {
              values += "'".concat(data[res], "'");

              if (index !== Object.keys(data).length - 1) {
                values += ", ";
              }
            });
            id = (0, _v.default)();
            _context3.next = 10;
            return conn.query("INSERT INTO ".concat(table, " ( id, ").concat(keys, ") VALUES ( '").concat(id, "', ").concat(values, ")"));

          case 10:
            if (conn) conn.end();
            return _context3.abrupt("return", id);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addOne(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.addOne = addOne;