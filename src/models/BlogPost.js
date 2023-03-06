/*module.exports = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('BlogPost', {
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
        published: {
            type: DataTypes.DATE
        },
        updated: {
            type: DataTypes.DATE
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }
    },
    {
        timestamps: false,
        tableName: 'blog_posts',
        underscored: true,
    });

    blogPost.associate = (models) => {
        blogPost.belongsTo(models.users, {
            foreignKey: 'usersId',
            as: 'user',
        });
    };
    blogPost.associate = (models) => {
        blogPost.hasOne(models.postCategory, {
            foreignKey: 'postId',
            as: 'postCategory',
        })
    }
    return blogPost;
}*/