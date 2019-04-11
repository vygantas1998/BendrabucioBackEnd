import {GraphQLSchema} from 'graphql';
import Mutation from './types/Mutation';

import Query from './types/main/Query';

let Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

export default Schema;