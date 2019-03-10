import express from "express";
import graphqlHTTP from "express-graphql";
import { printSchema } from "graphql";
import { writeFile } from 'fs';
import Schema from './data/Schema';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

writeFile('./graphql/schema.graphql', printSchema(Schema), err => {
  if(err) throw err;
  console.log("GRAPHQL schema created");
})