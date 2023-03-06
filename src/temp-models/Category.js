/* module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
        id: { 
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },

        name: {
            type: DataTypes.STRING,
        },

    },
    {
        timestamps: false,
        tableName: 'categories',
        underscored: true,
    });

    category.associate = (models) => {
        category.hasOne(models.postCategory, {
            foreignKey: 'categoryId',
            as: 'postCategory',
        });
    };
    return category;
} */
