'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('conversations', {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            image_url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            created_by: {
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
        });
     await queryInterface.addConstraint('conversations', {
         fields: ['id'],
         type: 'unique',
         name: 'conversations_pkeys',
     });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('conversations');
        
    },
};
