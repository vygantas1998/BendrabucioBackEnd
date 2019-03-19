"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowerReservation = exports.Shower = exports.WashingMachine = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WashingMachine = function WashingMachine(id, title, image_url, description, created_at, updated_at) {
  _classCallCheck(this, WashingMachine);

  this.id = id;
  this.title = title;
  this.image_url = image_url;
  this.description = description;
  this.created_at = created_at;
  this.updated_at = updated_at;

  if (_typeof(id) === "object") {
    Object.assign(this, id);
  }
};

exports.WashingMachine = WashingMachine;

var Shower = function Shower(id, type, description, created_at, updated_at) {
  _classCallCheck(this, Shower);

  this.id = id;
  this.type = type;
  this.description = description;
  this.created_at = created_at;
  this.updated_at = updated_at;

  if (_typeof(id) === "object") {
    Object.assign(this, id);
  }
};

exports.Shower = Shower;

var ShowerReservation = function ShowerReservation(id, shower_id, reservation_start_time, reservation_end_time, created_at, updated_at) {
  _classCallCheck(this, ShowerReservation);

  this.id = id;
  this.shower_id = shower_id;
  this.reservation_start_time = reservation_start_time;
  this.reservation_end_time = reservation_end_time;
  this.created_at = created_at;
  this.updated_at = updated_at;

  if (_typeof(id) === "object") {
    Object.assign(this, id);
  }
};

exports.ShowerReservation = ShowerReservation;