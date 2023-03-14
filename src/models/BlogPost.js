module.exports = (sequelize, DataTypes) => {
	const blogPost = sequelize.define(
		'BlogPost',
		{
			id: {
				allowNull: false,
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},

			title: {
				type: DataTypes.STRING,
			},
			content: {
				type: DataTypes.STRING,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				foreignKey: true,
			},
			published: {
				type: DataTypes.DATE,
			},
			updated: {
				type: DataTypes.DATE,
			},
		},
		{
			timestamps: true,
			createdAt: 'published',
			updatedAt: 'updated',
			tableName: 'blog_posts',
			underscored: true,
		},
	);

	blogPost.associate = (models) => {
		blogPost.belongsTo(models.User, {
			foreignKey: 'userId',
			as: 'user',
		});
	};
	return blogPost;
};
