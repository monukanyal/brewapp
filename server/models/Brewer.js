module.exports = function(sequelize, DataTypes) {
    var Brewer = sequelize.define('Brewer', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true
      },
      address: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      image:{
          type:DataTypes.STRING,
          allowNull: true
      }
    }, {
      classMethods: {
        associate: function(models) {
         // Store.hasMany(models.Inventory);
        }
      }
    });
  
    return Brewer;
  };