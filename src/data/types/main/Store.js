import {
    GraphQLObjectType,
    GraphQLNonNull
} from 'graphql';

import {
    connectionFromPromisedArray,
    connectionArgs
} from 'graphql-relay';

import {getAll} from '../../model/GetDataFromDb'

import {nodeInterface, WashingMachineConnection, ShowerReservationConnection, ShowerConnection} from '../../Nodes';

let storeType = new GraphQLObjectType({
    name: "Store",
    intefaces: [nodeInterface],
    fields: () => ({
        washingMachines: {
            type: new GraphQLNonNull(WashingMachineConnection),
            args: connectionArgs,
            resolve: (_, args) =>
                connectionFromPromisedArray(
                    getAll("washing_machine"),
                    args
                )
        },
        showers: {
            type: new GraphQLNonNull(ShowerConnection),
            args: connectionArgs,
            resolve: (_, args) =>
                connectionFromPromisedArray(
                    getAll("shower"),
                    args
                )
        },
        showerReservations: {
            type: new GraphQLNonNull(ShowerReservationConnection),
            args: connectionArgs,
            resolve: (_, args) =>
                connectionFromPromisedArray(
                    getAll("shower_reservation"),
                    args
                )
        }
    })
})
export default storeType;