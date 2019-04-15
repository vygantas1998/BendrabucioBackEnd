import {
    nodeDefinitions,
    fromGlobalId
} from 'graphql-relay'

import {
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

import {
    globalIdField,
    connectionDefinitions
} from 'graphql-relay';

import {WashingMachine, Shower, ShowerReservation, WashingMachineReservation} from './interfaces/types';
import { getOne } from './model/database'

const {nodeInterface, nodeField} = nodeDefinitions(
    globalId => {
    const {type, id} = fromGlobalId(globalId);
        switch(type){
            case "WashingMachine":
                return getOne(id, "washing_machine");
            case "Shower":
                getOne(id, "shower").then(res => {
                    console.log(res);
                })
                return getOne(id, "shower");
            case "ShowerReservation":
                return getOne(id, "shower_reservation");
            case "WashingMachine":
                return getOne(id, "washing_machine_reservation");
        }
        return null;
    },
    obj => {                                    // TODO - fix this
        if (obj instanceof WashingMachine) {
            return washingMachineType;
        } else if (obj instanceof Shower){
            return showerType;
        } else if (obj instanceof ShowerReservation){
            return showerReservationType;
        } else if (obj instanceof WashingMachineReservation){
            return washingMachineReservationType;
        }
        return null;
    },
);

const washingMachineType = new GraphQLObjectType({
    name: "WashingMachine",
    fields: () => ({
        id: globalIdField("WashingMachine"),
        title: { type: GraphQLString },
        image_url: { type: GraphQLString },
        description: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
    }),
    isTypeOf: () => "WashingMachine",
    interfaces: [nodeInterface],
})
const { connectionType: WashingMachineConnection, edgeType: GraphQLWashingMachineEdge } = connectionDefinitions({
    name: "WashingMachine",
    nodeType: washingMachineType
});

const showerType = new GraphQLObjectType({
    name: "Shower",
    fields: () => ({
        id: globalIdField("Shower"),
        type: { type: GraphQLString },
        description: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
    }),
    isTypeOf: () => "Shower",
    interfaces: [nodeInterface],
})
const { connectionType: ShowerConnection, edgeType: GraphQLShowerEdge } = connectionDefinitions({
    name: "Shower",
    nodeType: showerType
});

const showerReservationType = new GraphQLObjectType({
    name: "ShowerReservation",
    fields: () => ({
        id: globalIdField("ShowerReservation"),
        shower_id: { type: GraphQLString },
        reservation_start_time: { type: GraphQLString },
        reservation_end_time: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
    }),
    isTypeOf: () => "ShowerReservation",
    interfaces: [nodeInterface],
})
const { connectionType: ShowerReservationConnection, edgeType: GraphQLShowerReservationEdge } = connectionDefinitions({
    name: "ShowerReservation",
    nodeType: showerReservationType
});

const washingMachineReservationType = new GraphQLObjectType({
    name: "WashingMachineReservation",
    fields: () => ({
        id: globalIdField("WashingMachineReservation"),
        washing_machine_id: { type: GraphQLString },
        reservation_start_time: { type: GraphQLString },
        reservation_end_time: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
    }),
    isTypeOf: () => "WashingMachineReservation",
    interfaces: [nodeInterface],
})
const { connectionType: WashingMachineReservationConnection, edgeType: GraphQLWashingMachineReservationEdge } = connectionDefinitions({
    name: "WashingMachineReservation",
    nodeType: washingMachineReservationType
});


export {washingMachineType, GraphQLWashingMachineEdge, WashingMachineConnection};

export {washingMachineReservationType, WashingMachineReservationConnection, GraphQLWashingMachineReservationEdge};

export {showerType, ShowerConnection, GraphQLShowerEdge};

export {showerReservationType, ShowerReservationConnection, GraphQLShowerReservationEdge};


export {nodeInterface, nodeField};