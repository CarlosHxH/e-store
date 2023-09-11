"use strict";
import Sequelize from 'sequelize';
import sqlite3 from "sqlite3";
//import fs from 'fs';
//import config from '../../config/config.json';
//import path from 'path';

const env = process.env.NODE_ENV || "development";

//const config = require(path.join(__dirname, '../../', 'config', 'config.json'))[env];
//const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);
const sequelize = new Sequelize({
	dialect: 'sqlite',
	dialectModule: sqlite3,
	storage: '/src/config/database.sqlite'
});
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;