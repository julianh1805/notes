'use strict';

const Hapi = require('@hapi/hapi');
const MySQL = require('mysql');
const postRoute = require('./routes/postRoutes.js');
const server = new Hapi.Server();

const connection = MySQL.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'list_notes'
});

const init = async () => {

    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    connection.connect();

    postRoute(server, connection)

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
}

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();