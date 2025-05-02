import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../db';

interface TaskAttributes {
  id: string;
  title: string;
  description?: string;
  isCompleted?: boolean;
  userId: string;
}

class Task extends Model<TaskAttributes> implements TaskAttributes {
  public id!: string;
  public title!: string;
  public description?: string;
  public isCompleted?: boolean;
  public userId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  }
}

Task.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  isCompleted: {
    allowNull: false,
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  userId: {
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: 'Users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}, {
  sequelize,
  modelName: 'Task',
});

export default Task;
export { TaskAttributes };

