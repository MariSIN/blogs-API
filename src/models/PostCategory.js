 module.exports = (sequelize, DataTypes) => {
    const postCategory = sequelize.define('PostCategory', {

       postId: DataTypes.INTEGER,
       categoryId: DataTypes.INTEGER,
    },
    {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    });

    postCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blog_post',
          through: postCategory,
          foreignKey: { 
            name:'postId',
            field: 'post_id'
          },
          otherKey: 'categoryId'
        });

        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: postCategory,
          foreignKey: {
            name:'categoryId',
            field: 'category_id'
          }, 
          otherKey: 'postId',
        });
      }
    return postCategory;
}
