module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		'User',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			displayName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			email: {
				allowNull: false,
				unique: true,
				type: DataTypes.STRING,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			image: {
				type: DataTypes.STRING,
			},
		},
		{
			underscored: true,
			timestamps: false,
			tableName: 'users',
		},		
	);

	user.associate = (models) => {
        user.hasMany(models.BlogPost, {
            foreignKey: 'userId',
            as: 'blog_posts',
        });
    };
	return user;
};
