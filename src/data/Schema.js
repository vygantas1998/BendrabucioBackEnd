import {
    GraphQLSchema,
} from 'graphql';

import Query from './types/Query';

let Schema = new GraphQLSchema({
    query: Query
});

export default Schema;