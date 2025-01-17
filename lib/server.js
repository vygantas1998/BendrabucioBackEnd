"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _graphql = require("graphql");

var _fs = require("fs");

var _Schema = _interopRequireDefault(require("./data/Schema"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use('/graphql', (0, _expressGraphql.default)({
  schema: _Schema.default,
  graphiql: true
}));
app.listen(56171, function () {
  return console.log('Now browse to localhost:56171/graphql');
});
(0, _fs.writeFile)('./graphql/schema.graphql', (0, _graphql.printSchema)(_Schema.default), function (err) {
  if (err) throw err;
  console.log("GRAPHQL schema created");
});