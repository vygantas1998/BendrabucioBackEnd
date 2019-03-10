"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = (0, _graphql.buildSchema)("\n  type Query {\n    hello: String\n  }\n");
var root = {
  hello: function hello() {
    return 'Hello world!';
  }
};
var app = (0, _express.default)();
app.use('/graphql', (0, _expressGraphql.default)({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000, function () {
  return console.log('Now browse to localhost:4000/graphql');
});