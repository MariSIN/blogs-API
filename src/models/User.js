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
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			underscored: true,
			timestamps: false,
			tableName: 'users',
		},
	);
	return user;
};
