import mariadb from 'mariadb';
import "@babel/polyfill";
import {WashingMachine, Shower, ShowerReservation} from '../interfaces/types';

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

export {getAll, getOne};