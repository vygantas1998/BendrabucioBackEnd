import {
    GraphQLObjectType,
} from 'graphql';
import { AddWashingMashineMutation } from './mutations/AddWashingMashineMutation';



const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addWashingMachine: AddWashingMashineMutation,
    },
  });
export default mutationType;