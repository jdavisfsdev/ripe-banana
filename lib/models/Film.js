import { Sequelize } from 'sequelize';
import db from '../utils/db';

class Film extends Sequelize.Model {}

Film.init({
  title: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  studio: {
    type: Sequelize.DataTypes.BIGINT,
    allowNull: false
  },
  released: {
    type: Sequelize.DataTypes.NUMBER(4),
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Film',
  underscored: true
});

export default Film;
