'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('users', {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: 'users_email_key',
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            profile_image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phone: {
                type: DataTypes.STRING(16),
                allowNull: false,
                unique: 'users_phone_key',
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
    await queryInterface.addConstraint('users', {
        fields: ['id', 'phone', 'email'],
        type: 'unique',
        name: 'users_pkeys',
    });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    },
};