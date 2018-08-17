module.exports = function(sequelize, DataTypes) {
    var Brewer_details = sequelize.define('Brewer_details', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      OpeningMonday: {
        type: DataTypes.STRING
      },
      OpeningTuesday: {
        type: DataTypes.STRING
      },
      OpeningWednesday: {
        type: DataTypes.STRING
      },
      OpeningThursday: {
        type: DataTypes.STRING
      },
      OpeningFriday: {
        type: DataTypes.STRING
      },
      OpeningSaturday: {
        type: DataTypes.STRING
      },
      OpeningSunday: {
        type: DataTypes.STRING
      },
      ClosingMonday: {
        type: DataTypes.STRING
      },
      ClosingTuesday: {
        type: DataTypes.STRING
      },
      ClosingWednesday: {
        type: DataTypes.STRING
      },
      ClosingThursday: {
        type: DataTypes.STRING
      },
      ClosingFriday: {
        type: DataTypes.STRING
      },
      ClosingSaturday: {
        type: DataTypes.STRING
      },
      ClosingSunday: {
        type: DataTypes.STRING
      }
    }, {
      classMethods: {
        associate: function(models) {
         // Store.hasMany(models.Inventory);
        }
      }
    });
  
    return Brewer_details;
  };