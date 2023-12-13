import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Admin = sequelize.define('Admin', {
    username: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Admin;