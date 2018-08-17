module.exports=function(sequelize, DataTypes){
    var User_beer_style = sequelize.define('User_beer_style', {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
        },
        user_id:{
          type:DataTypes.UUID
        },
        cat_id:{
          type:DataTypes.UUID
        }
      }, {
        classMethods: {
          associate: function(models) {
         
          }
        }
      });
    
      return User_beer_style;
};