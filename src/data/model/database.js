import mariadb from 'mariadb';
import "@babel/polyfill";
import {WashingMachine, Shower, ShowerReservation} from '../interfaces/types';
import uuid from 'uuid/v1';

const pool = mariadb.createPool({
     host: '5.79.67.193', 
     user:'uabdagva', 
     password: 'uabdagva',
     database: 'bendrabutis',
     connectionLimit: 5
});

const getAll = async(table) => {
    const conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * FROM ${table}`);
    if (conn) conn.end();
    return rows;
}

const getOne = async(id, table) => {
    const conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * FROM ${table} WHERE id='${id}'`);
    if (conn) conn.end();
    switch(table){
        case "shower":
            return new Shower(rows[0]);
        case "shower_reservation":
            return new ShowerReservation(rows[0]);
        case "washing_machine":
            return new WashingMachine(rows[0]);
    }
}

const addOne = async(data, table) =>{
    const conn = await pool.getConnection();
    let keys = "";
    Object.keys(data).forEach((res, index) => {
        keys += `${res}`;
        if(index !== Object.keys(data).length-1){
            keys += ", ";
        }
    });
    let values = "";
    Object.keys(data).forEach((res, index) => {
        values += `'${data[res]}'`;
        if(index !== Object.keys(data).length-1){
            values += ", ";
        }
    });
    const id = uuid();
    const rows = await conn.query(`INSERT INTO ${table} ( id, ${keys}) VALUES ( '${id}', ${values})`);
    if (conn) conn.end();
    switch(table){
        case "shower":
            return new Shower(rows[0]);
        case "shower_reservation":
            return new ShowerReservation(rows[0]);
        case "washing_machine":
            return new WashingMachine(rows[0]);
    }
}
export {getAll, getOne, addOne};