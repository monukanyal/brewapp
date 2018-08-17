module.exports = function(sequelize, DataTypes) {
    var Brewer_events = sequelize.define('Brewer_events', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      eventName: {
        type: DataTypes.STRING
      },
      Eventdatetime: {
        type: DataTypes.STRING
      },
      Address: {
        type: DataTypes.STRING
      },
      Description: {
        type: DataTypes.STRING
      }
    }, {
      classMethods: {
        associate: function(models) {
         // Store.hasMany(models.Inventory);
        }
      }
    });
  
    return Brewer_events;
  };