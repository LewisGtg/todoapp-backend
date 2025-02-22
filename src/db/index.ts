const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todoapp', 'todoapp', '2705', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
