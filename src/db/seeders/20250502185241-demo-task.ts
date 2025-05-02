import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Tasks', [
      {
        id: '660e8400-e29b-41d4-a716-446655440000', 
        title: 'Task 1',
        description: 'Description for Task 1',
        isCompleted: false,
        userId: '550e8400-e29b-41d4-a716-446655440000', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '660e8400-e29b-41d4-a716-446655440001',
        title: 'Task 2',
        description: 'Description for Task 2',
        isCompleted: true,
        userId: '550e8400-e29b-41d4-a716-446655440001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '660e8400-e29b-41d4-a716-446655440002',
        title: 'Task 3',
        description: 'Description for Task 3',
        isCompleted: false,
        userId: '550e8400-e29b-41d4-a716-446655440002',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete('Tasks', {}, {});
  }
};
