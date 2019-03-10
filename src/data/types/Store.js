import {
    GraphQLObjectType,
    GraphQLNonNull
} from 'graphql';

import {
    connectionFromPromisedArray,
    connectionArgs
} from 'graphql-relay';

import {getWashingMachines} from '../model/WashingMachine'

import {WashingMachineConnection} from './WashingMachine';

import {nodeField, nodeInterface} from '../interfaces/Node';

let storeType = new GraphQLObjectType({
    name: "Store",
    intefaces: [nodeInterface],
    fields: () => ({
        washingMachines: {
            type: new GraphQLNonNull(WashingMachineConnection),
            args: connectionArgs,
            resolve: (_, args) =>
                connectionFromPromisedArray(
                    getWashingMachines(),
                    args
                )
        }
    })
})
export default storeType;