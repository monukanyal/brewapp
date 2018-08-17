module.exports = function(sequelize, DataTypes) {
  var category_beer_tbl = sequelize.define('category_beer_tbl', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
       // Product.hasMany(models.Inventory)
      }
    }
  });

  return category_beer_tbl;
};