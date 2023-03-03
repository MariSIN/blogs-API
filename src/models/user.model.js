module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,

    },
    {
        timestamps: false,
        tableName: 'users',
    });
    return user;
}