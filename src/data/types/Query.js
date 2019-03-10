import {
    GraphQLObjectType,
} from 'graphql';
import Store from './Store';
import {nodeField, nodeInterface} from '../interfaces/Node';

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        store: {
            type: Store,
            resolve: () => {return {}}
        },
        node: nodeField
    }),
})
export default queryType;