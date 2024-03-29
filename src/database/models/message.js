const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
      'message',
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
      },
      {
          sequelize,
          tableName: 'message',
          schema: 'public',
          timestamps: true,
          indexes: [
              {
                  name: 'message_pkey',
                  unique: true,
                  fields: [{ name: 'id' }],
              },
          ],
      }
  );
};
