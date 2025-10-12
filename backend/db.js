const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Q#45bmc7",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.export = pool;