import {
    cursorForObjectInConnection,
    mutationWithClientMutationId,
  } from 'graphql-relay';
  
import {GraphQLNonNull, GraphQLString} from 'graphql';
  
import { GraphQLWashingMachineEdge } from '../../Nodes';
import { getAll, getOne, addOne } from '../../model/database';

  const AddWashingMashineMutation = mutationWithClientMutationId({
    name: 'AddWashingMashine',
    inputFields: {
        title: { type: GraphQLString },
        image_url: { type: GraphQLString },
        description: { type: GraphQLString },
    },
    outputFields: {
      washingMashineEdge: {
        type: new GraphQLNonNull(GraphQLWashingMachineEdge),
        resolve: ({washingMashineId}) => {
          const washingMashine = getOne(washingMashineId, "washing_machine");
          return {
            cursor: cursorForObjectInConnection([...getAll("washing_machine")], washingMashine),
            node: washingMashine,
          };
        },
      },
    },
    mutateAndGetPayload: (data) => {
      const washingMashineId = addOne(data, "washing_machine");
      return {washingMashineId};
    },
  });
  
  export {AddWashingMashineMutation};
  