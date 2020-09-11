module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./src/data/pokemon.db3"
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./src/data/migrations"
        },
        seeds: {
            directory: "./src/data/seeds",
        },
        pool: {
            afterCreate: (conn:any, done:any) => {
                // runs after a connection is made to the sqlite engine
                conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
            },
        }
    }
};