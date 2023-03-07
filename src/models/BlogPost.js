module.exports = (sequelize, DataTypes) => {
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
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        published: {
            type: DataTypes.DATE
        },
        updated: {
            type: DataTypes.DATE
        },
        
    },
    {
        timestamps: false,
        tableName: 'blog_posts',
        underscored: true,
    });

    blogPost.associate = (models) => {
        blogPost.belongsTo(models.User, {
            foreignKey: { 
                name:'userId',
                field: 'user_id'
            },
            as: 'users',
        });
    };
    return blogPost;
}
