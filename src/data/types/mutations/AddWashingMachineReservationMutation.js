import {
    cursorForObjectInConnection,
    mutationWithClientMutationId,
  } from 'graphql-relay';
  
import {GraphQLNonNull, GraphQLString} from 'graphql';
  
import { GraphQLWashingMachineReservationEdge } from '../../Nodes';
import { getAll, getOne, addOne } from '../../model/database';

  const AddWashingMachineReservationMutation = mutationWithClientMutationId({
    name: 'AddWashingMachineReservation',
    inputFields: {
        washingMachine_id: { type: GraphQLString },
        reservation_start_time: { type: GraphQLString },
        reservation_end_time: { type: GraphQLString },
    },
    outputFields: {
      washingMachineReservationEdge: {
        type: new GraphQLNonNull(GraphQLWashingMachineReservationEdge),
        resolve: async({washingMachineReservationId}) => {
            const washingMachineReservation = await getOne(await washingMachineReservationId, "washing_machine_reservation");
            return {
                cursor: cursorForObjectInConnection([...await getAll("washing_machine_reservation")], washingMachineReservation),
                node: washingMachineReservation,
            };
        },
      },
    },
    mutateAndGetPayload: (data) => {
      const washingMachineReservationId = addOne(data, "washing_machine_reservation");
      return {washingMachineReservationId};
    },
  });
  
export {AddWashingMachineReservationMutation};
  