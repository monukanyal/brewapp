module.exports=function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING
        },
        Email: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: true 
        },
        dob: {
          type: DataTypes.STRING,
          allowNull: true 
        },
        profile_pic: {
          type: DataTypes.STRING,
          allowNull: true 
        }              
      }, {
        classMethods: {
          associate: function(models) {
         
          }
        }
      });
    
      return User;
};