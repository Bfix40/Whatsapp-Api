'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('participants', {
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
        });
    await queryInterface.addConstraint('participants', {
        fields: ['id'],
        type: 'unique',
        name: 'participants_pkeys',
    });
    },

    async down(queryInterface, Sequelize) {
       
        await queryInterface.dropTable('participants');
         
    },
};
