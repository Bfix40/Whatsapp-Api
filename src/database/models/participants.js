const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
      'participants',
      {
          id: {
              type: DataTypes.UUID,
              allowNull: false,
              primaryKey: true,
          },
          conversation_id: {
              type: DataTypes.UUID,
              allowNull: false,
              references: {
                  model: 'conversations',
                  key: 'id',
              },
          },
          user_id: {
              type: DataTypes.UUID,
              allowNull: false,
              references: {
                  model: 'users',
                  key: 'id',
              },
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
      },
      {
          sequelize,
          tableName: 'participants',
          schema: 'public',
          timestamps: true,
          indexes: [
              {
                  name: 'participants_pkey',
                  unique: true,
                  fields: [{ name: 'id' }],
              },
          ],
      }
  );
};
