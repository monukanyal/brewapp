module.exports = function(sequelize, DataTypes) {
  var Beer = sequelize.define('Beer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    picture: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // Inventory.belongsTo(models.Product);
        // Inventory.belongsTo(models.Store);
      }
    }
  });

  return Beer;
};