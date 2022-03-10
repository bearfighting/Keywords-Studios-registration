// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'db',
      user:     'user',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
