const postService = require('../services/postService.js');

const initPostRoute = function (server, connection) {

    server.route({
        method: 'GET',
        path: '/notes',
        handler: (req, res) => {
            return postService.get(connection);
        }
    });

    server.route({
        method: 'GET',
        path: '/notes/{id}',
        handler: (req, res) => {
            return postService.getById(connection, req.params.id);
        }
    });

    server.route({
        method: 'PUT',
        path: '/notes/add/{id}',
        handler: (req, res) => {
            return postService.post(connection, req.payload, req.params.id);
        }
    });

    server.route({
        method: 'POST',
        path: '/notes/{id}',
        handler: (req, res) => {
            return postService.update(connection, req.payload, req.params.id);
        }
    });

    server.route({
        method: 'DELETE',
        path: '/notes/{id}',
        handler: (req, res) => {
            return postService.delete(connection, req.params.id);
        }
    });

}
module.exports = initPostRoute