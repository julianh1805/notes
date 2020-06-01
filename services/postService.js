const postDao = require('../dao/postDao.js');

module.exports = {
    get(connection) {
        return postDao.get(connection);
    },
    getById(connection, id) {
        return postDao.getById(connection, id);
    },
    post(connection, post, id) {
        return postDao.post(connection, post, id);
    },
    update(connection, post, id) {
        return postDao.update(connection, post, id);
    },
    delete(connection, id) {
        return postDao.delete(connection, id);
    }
}