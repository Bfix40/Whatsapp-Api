'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
     await queryInterface.createTable('message',
      {
          id: {
              type: DataTypes.UUID,
              allowNull: false,
              primaryKey: true,
          },
          sender_id: {
              type: DataTypes.UUID,
              allowNull: false,
              references: {
                  model: 'users',
                  key: 'id',
              },
          },
          consersation_id: {
              type: DataTypes.UUID,
              allowNull: false,
              references: {
                  model: 'conversations',
                  key: 'id',
              },
          },
          message: {
              type: DataTypes.STRING(255),
              allowNull: false,
          },
          createdAt: {
              type: DataTypes.DATE,
              allowNull: false,
              field: 'created_at',
          },
          updatedAt: {
              type: DataTypes.DATE,
              allowNull: false,
              field: 'updated_at',
          },
      });
     await queryInterface.addConstraint('message', {
         fields: ['id'],
         type: 'unique',
         name: 'message_pkeys',
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('message');
       
  },
};
