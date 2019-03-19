import express from "express";
import graphqlHTTP from "express-graphql";
import { printSchema } from "graphql";
import { writeFile } from 'fs';
import Schema from './data/Schema';
import cors from 'cors';

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));
app.listen(56171, () => console.log('Now browse to localhost:56171/graphql'));

writeFile('./graphql/schema.graphql', printSchema(Schema), err => {
  if(err) throw err;
  console.log("GRAPHQL schema created");
})