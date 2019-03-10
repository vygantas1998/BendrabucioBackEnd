"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWashingMachine = exports.getWashingMachines = void 0;

var _mariadb = _interopRequireDefault(require("mariadb"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pool = _mariadb.default.createPool({
  host: '5.79.67.193',
  user: 'vygantas1998',
  password: 'flDH34ak',
  database: 'bendrabutis',
  connectionLimit: 5
});

var getWashingMachines =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
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
            return conn.query("SELECT * FROM washing_machine");

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

  return function getWashingMachines() {
    return _ref.apply(this, arguments);
  };
}();

exports.getWashingMachines = getWashingMachines;

var getWashingMachine =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(id) {
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
            return conn.query("SELECT * FROM washing_machine WHERE id='".concat(id, "'"));

          case 5:
            rows = _context2.sent;
            if (conn) conn.end();
            return _context2.abrupt("return", rows);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getWashingMachine(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getWashingMachine = getWashingMachine;