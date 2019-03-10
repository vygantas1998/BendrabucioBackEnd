import {
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

import {
    globalIdField,
    connectionDefinitions
} from 'graphql-relay';

import {nodeInterface} from '../interfaces/Node';

const washingMachineType = new GraphQLObjectType({
    name: "WashingMachine",
    fields: () => ({
        id: globalIdField("WashingMachine"),
        title: { type: GraphQLString },
        image_url: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
    }),
    interfaces: [nodeInterface],
})
const { connectionType: WashingMachineConnection } = connectionDefinitions({
    name: "WashingMachine",
    nodeType: washingMachineType
});

export {washingMachineType, WashingMachineConnection};