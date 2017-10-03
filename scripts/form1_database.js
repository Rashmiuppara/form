/**
 * Created by barrett on 8/28/14.
 */

var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `date` DATE,\
    `purpose_of_project` VARCHAR(20) NOT NULL, \
    `name_of_entrepreneur` VARCHAR(60) NOT NULL, \
    `project_site_space` VARCHAR(60) NOT NULL,\
    `note` VARCHAR(600) NOT NULL,\
    `project_description` VARCHAR(6000) NOT NULL,\
    `` VARCHAR(600) NOT NULL,

        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
)');

console.log('Success: Database Created!')

connection.end();
