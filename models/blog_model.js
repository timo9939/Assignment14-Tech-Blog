const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class blogModel extends Model {}
blogModel.init(
{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
  
    },

    blog_title:{
        type:DataTypes.STRING,
        allowNull:false
    },

    blog_content:{
        type:DataTypes.TEXT,
        allowNull:false
    },

},


{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogModel'
  }
);

module.exports = blogModel;
