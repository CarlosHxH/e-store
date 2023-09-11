import { Sequelize, DataTypes } from "sequelize";
import sqlite3 from "sqlite3";

const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: './src/config/database.db'
});
const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  emailVerified: {
    type: DataTypes.DATE,
    field: 'email_verified',
  },
  image: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
});

const Account = sequelize.define('Account', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  userId: {
    type: DataTypes.STRING,
    field: 'user_id',
  },
  type: DataTypes.STRING,
  provider: DataTypes.STRING,
  providerAccountId: {
    type: DataTypes.STRING,
    field: 'provider_account_id',
  },
  token_type: DataTypes.STRING,
  refresh_token: DataTypes.TEXT,
  access_token: DataTypes.TEXT,
  expires_at: DataTypes.INTEGER,
  scope: DataTypes.STRING,
  id_token: DataTypes.TEXT,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
});

const Session = sequelize.define('Session', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  userId: {
    type: DataTypes.STRING,
    field: 'user_id',
  },
  sessionToken: {
    type: DataTypes.TEXT,
    unique: true,
    field: 'session_token',
  },
  accessToken: {
    type: DataTypes.TEXT,
    field: 'access_token',
  },
  expires: DataTypes.DATE,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
});

const VerificationRequest = sequelize.define('VerificationRequest', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  identifier: DataTypes.STRING,
  token: {
    type: DataTypes.STRING,
    unique: true,
  },
  expires: DataTypes.DATE,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
});



const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salesPerDay: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salesPerMonth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  totalSales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalRevenue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  lastUpdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING
  },
});


User.hasMany(Account, { foreignKey: 'userId' });
Account.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
Session.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
Category.hasMany(Product, {foreignKey: 'categoryId'});
Category.hasMany(Category, {foreignKey: 'categoryId'});

/*(async () => {
  await sequelize.sync({ force: true }).then(
    () => console.log("Sync complete")
  );
})();*/

export { User, Product, Category, Account, Session, VerificationRequest, sequelize };
