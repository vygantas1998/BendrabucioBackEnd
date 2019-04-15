import {
    GraphQLObjectType,
} from 'graphql';
import { AddShowerMutation } from './mutations/AddShowerMutation';
import { AddWashingMachineMutation } from './mutations/AddWashingMachineMutation';
import { AddShowerReservationMutation } from './mutations/AddShowerReservationMutation';



const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addWashingMachine: AddWashingMachineMutation,
      addShower: AddShowerMutation,
      addWashingMachineReservation: AddShowerReservationMutation,
      addShowerReservation: AddShowerReservationMutation
    },
  });
export default mutationType;