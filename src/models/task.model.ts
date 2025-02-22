const { DataTypes, Model } = require('sequelize');
import sequelize from "../db";

class Task extends Model {
    declare id: number
}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    }
},{
    sequelize,
    modelName: "Task"
});

export default Task;