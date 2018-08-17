module.exports = function(sequelize, DataTypes) {
    var Brewer_reviews = sequelize.define('Brewer_reviews', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      Name: {
        type: DataTypes.STRING
      },
      Message: {
        type: DataTypes.STRING
      },
      Rating: {
        type: DataTypes.STRING
      }
    }, {
      classMethods: {
        associate: function(models) {
         // Store.hasMany(models.Inventory);
        }
      }
    });
  
    return Brewer_reviews;
  };