const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

// Associations
Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });

module.exports = Post;