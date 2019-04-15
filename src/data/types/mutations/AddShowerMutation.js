import {
    cursorForObjectInConnection,
    mutationWithClientMutationId,
  } from 'graphql-relay';
  
import {GraphQLNonNull, GraphQLString} from 'graphql';
  
import { GraphQLShowerEdge } from '../../Nodes';
import { getAll, getOne, addOne } from '../../model/database';

  const AddShowerMutation = mutationWithClientMutationId({
    name: 'AddShower',
    inputFields: {
        type: { type: GraphQLString },
        description: { type: GraphQLString },
    },
    outputFields: {
      showerEdge: {
        type: new GraphQLNonNull(GraphQLShowerEdge),
        resolve: async({showerId}) => {
            const shower = await getOne(await showerId, "shower");
            return {
                cursor: cursorForObjectInConnection([...await getAll("shower")], shower),
                node: shower,
            };
        },
      },
    },
    mutateAndGetPayload: (data) => {
      const showerId = addOne(data, "shower");
      return {showerId};
    },
  });
  
  export {AddShowerMutation};
  