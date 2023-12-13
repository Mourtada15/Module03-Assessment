import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Article = sequelize.define('Article', {
    category: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Article;