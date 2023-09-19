module.exports = (sequelize, DataTypes) => {
    const FillPost = sequelize.define('FillPost', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
  
    return FillPost;
  };
  