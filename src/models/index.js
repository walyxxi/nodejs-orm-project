import { Sequelize } from 'sequelize';
import UserModel from './user.model';
import PostModel from './post.model';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', // or 'mysql', 'sqlite', 'mssql'
});

const User = UserModel(sequelize, Sequelize.DataTypes);
const Post = PostModel(sequelize, Sequelize.DataTypes);

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

const db = {
  sequelize,
  Sequelize,
  User,
  Post,
};

export default db;