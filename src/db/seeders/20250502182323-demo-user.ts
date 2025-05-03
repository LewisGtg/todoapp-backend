import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Users', [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        name: 'lewis',
        email: 'lewis@example.com',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440001',
        name: 'john',
        email: 'john@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440002',
        name: 'jane',
        email: 'jane@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440003',
        name: 'alice',
        email: 'alice@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete('Users', {}, {});
  }
};
