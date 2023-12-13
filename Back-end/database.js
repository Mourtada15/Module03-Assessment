import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Module03-Assessment', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database!');

        await sequelize.sync({ force: true });
        console.log('Models synchronized with the database!');
    } catch (error) {
        console.log('Unable to connect to the database!', error);
    }
})();

export default sequelize;