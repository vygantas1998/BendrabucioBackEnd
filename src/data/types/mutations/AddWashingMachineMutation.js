import {
    cursorForObjectInConnection,
    mutationWithClientMutationId,
  } from 'graphql-relay';
  
import {GraphQLNonNull, GraphQLString} from 'graphql';
  
import { GraphQLWashingMachineEdge } from '../../Nodes';
import { getAll, getOne, addOne } from '../../model/database';

  const AddWashingMachineMutation = mutationWithClientMutationId({
    name: 'AddWashingMachine',
    inputFields: {
        title: { type: GraphQLString },
        image_url: { type: GraphQLString },
        description: { type: GraphQLString },
    },
    outputFields: {
      washingMachineEdge: {
        type: new GraphQLNonNull(GraphQLWashingMachineEdge),
        resolve: async({washingMachineId}) => {
          const washingMachine = await getOne(await washingMachineId, "washing_machine");
          return {
            cursor: cursorForObjectInConnection([...await getAll("washing_machine")], washingMachine),
            node: washingMachine,
          };
        },
      },
    },
    mutateAndGetPayload: (data) => {
      const washingMachineId = addOne(data, "washing_machine");
      return {washingMachineId};
    },
  });
  
  export {AddWashingMachineMutation};
  