 const config = require('../../config');
// const _ = require('lodash');
// const defaultConfig = config.dev;
// const environment = process.env.NODE_ENV || 'dev';
// const environmentConfig = config[environment];
// const finalConfig = _.merge(defaultConfig, environmentConfig);

// module.exports = finalConfig.database;


module.exports = {
    development: {
        username: config.db.development.username,
        password: config.db.development.password,
        database: config.db.development.database,
        host: '127.0.0.1',
        dialect: config.db.development.dialect,
    },
    test: {
        username: config.db.test.username,
        password: config.db.test.password,
        database: config.db.test.database,
        host: '127.0.0.1',
        dialect: config.db.test.dialect,
    },
    production: {
        url: config.db.production.url,
        use_env_variable: config.db.production.url,
        dialect: 'postgres',
        protocol: 'postgres',
        ssl: true,
        dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
    },
};
