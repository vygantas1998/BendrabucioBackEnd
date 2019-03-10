import {
    nodeDefinitions,
    fromGlobalId
} from 'graphql-relay'

import { getWashingMachine } from '../model/WashingMachine'

import {washingMachineType} from '../types/WashingMachine'

const {nodeInterface, nodeField} = nodeDefinitions(
    globalId => {
    const {type, id} = fromGlobalId(globalId);
        if (type === "WashingMachine") {
            return getWashingMachine(id);
        } 
        return null;
    },
    obj => {                                    // TODO - fix this
        if (obj instanceof WashingMachine) {
            return washingMachineType;
        } 
        return null;
    },
);

export {nodeInterface, nodeField};