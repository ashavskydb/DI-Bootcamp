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
        // connectionString: 'postgresql://DI-Bootcamp_owner:MqLGS1UH4Xja@ep-little-silence-a2o5i1xn.eu-central-1.aws.neon.tech/DI-Bootcamp?sslmode=require'
        // host: PGHOST,
        // port: PGPORT,
        // user: PGUSER,
        // database: PGDATABASE,
        // password: PGPASSWORD

        ssl: {rejectUnauthorized: false},
    }
});

module.exports = {db}