import {
    cursorForObjectInConnection,
    mutationWithClientMutationId,
  } from 'graphql-relay';
  
import {GraphQLNonNull, GraphQLString} from 'graphql';
  
import { GraphQLShowerReservationEdge } from '../../Nodes';
import { getAll, getOne, addOne } from '../../model/database';

  const AddShowerReservationMutation = mutationWithClientMutationId({
    name: 'AddShowerReservation',
    inputFields: {
        shower_id: { type: GraphQLString },
        reservation_start_time: { type: GraphQLString },
        reservation_end_time: { type: GraphQLString },
    },
    outputFields: {
      showerReservationEdge: {
        type: new GraphQLNonNull(GraphQLShowerReservationEdge),
        resolve: async({showerReservationId}) => {
            const showerReservation = await getOne(await showerReservationId, "shower_reservation");
            return {
                cursor: cursorForObjectInConnection([...await getAll("shower_reservation")], showerReservation),
                node: showerReservation,
            };
        },
      },
    },
    mutateAndGetPayload: (data) => {
      const showerReservationId = addOne(data, "shower_reservation");
      return {showerReservationId};
    },
  });
  
export {AddShowerReservationMutation};
  