module.exports = {
    get(connection) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM notes`, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        })

    },
    getById(connection, id) {
        return promise = new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM notes WHERE id = ${id}`, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

    },
    post(connection, post, id) {
        return promise = new Promise((resolve, reject) => {
            const date = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0];
            connection.query(`INSERT INTO notes (title, description, created_at, updated_at, user_id) VALUES ('${post.title}','${post.description}','${date}','${date}', ${id})`, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve('Product added');
                }
            });
        });

    },
    update(connection, post, id) {
        return promise = new Promise((resolve, reject) => {
            const date = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0];
            connection.query(`UPDATE notes SET title = '${post.title}', description = '${post.description}', updated_at = '${date}' WHERE id = ${id}`, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve('Product updated');
                }
            });
        });

    },
    delete(connection, id) {
        return promise = new Promise((resolve, reject) => {
            connection.query(`DELETE FROM notes WHERE id = ${id}`, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve('Product deleted');
                }
            });
        });

    }
}