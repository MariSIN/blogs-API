module.exports = (sequelize, DataTypes) => {
	const postCategory = sequelize.define(
		'PostCategory',
		{
			postId: DataTypes.INTEGER,
			categoryId: DataTypes.INTEGER,
		},
		{
			timestamps: false,
			tableName: 'posts_categories',
			underscored: true,
		},
	);

	postCategory.associate = (models) => {
		models.Category.belongsToMany(models.BlogPost, {
			as: 'blogPosts',
			through: postCategory,
			foreignKey: 'categoryId',
			otherKey: 'postId',
		});

		models.BlogPost.belongsToMany(models.Category, {
			as: 'categories',
			through: postCategory,
			foreignKey: 'postId',
			otherKey: 'categoryId',
		});
	};
	return postCategory;
};
