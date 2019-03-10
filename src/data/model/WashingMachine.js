import mariadb from 'mariadb';
import "@babel/polyfill";


const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     database: 'bendrabutis',
     connectionLimit: 5
});

const getWashingMachines = async() => {
    const conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * FROM washing_machine`);
    if (conn) conn.end();
    return rows;
}

const getWashingMachine = async(id) => {
    const conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * FROM washing_machine WHERE id='${id}'`);
    if (conn) conn.end();
    return rows;
}

export {getWashingMachines, getWashingMachine};