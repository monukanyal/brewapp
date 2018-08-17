module.exports = function(sequelize, DataTypes) {
  var Beer_category = sequelize.define('Beer_category', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    beer_id: {
      type: DataTypes.UUID
    },
    cat_id: {
      type: DataTypes.UUID
    }
  }, {
    classMethods: {
      associate: function(models) {
       // Store.hasMany(models.Inventory);
      }
    }
  });

  return Beer_category;
};