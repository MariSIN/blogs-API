/*module.exports = (sequelize, DataTypes_) => {
    const postCategory = sequelize.define('postCategory', {

    },
    {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    });

    postCategory.associate = (models) => {
        models.Category.belongsToMany(models.Category, {
          as: 'category',
          through: postCategory,
          foreignKey: 'categoryId', 
        });
        
        models.BlogPosts.belongsToMany(models.BlogPost, {
          as: 'blogPost',
          through: postCategory,
          foreignKey: 'postId',
        });
      }
    return postCategory;
}*/