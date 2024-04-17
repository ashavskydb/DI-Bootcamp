
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 1985 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 1964 },
    { id: 3, title: 'Book 3', author: 'Author 3', publishedYear: 2001 }
];

module.exports = {
    books
};

const knex = require('knex');
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         port: 5434,
//         user: 'postgres',
//         database: 'postgres', 
//         password: '123456'
//     }
// });


const db = knex({
    client: 'pg',
    connection: { 
        connectionString: 'postgresql://DI-Bootcamp_owner:MqLGS1UH4Xja@ep-little-silence-a2o5i1xn.eu-central-1.aws.neon.tech/DI-Bootcamp?sslmode=require'
        // host: PGHOST,
        // port: PGPORT,
        // user: PGUSER,
        // database: PGDATABASE,
        // password: PGPASSWORD

        // ssl: {rejectUnauthorized: false},
    }
});

module.exports = {db}