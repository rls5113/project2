module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userid: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [1, 75]
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 10]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    }
  });
  
  User
  .create({ userid:"rstuart", name: "Robert Stuart", email: "r@r.com", password:"you", role: "admin" })
  .then(user => {
    console.log(user.get("name")); 
    console.log(user.get("userid")); 
  });
  User
  .create({ userid:"dbenton", name: "Dawn Benton", email: "r@r.com", password:"you", role: "admin" })
  .then(user => {
    console.log(user.get("name")); 
    console.log(user.get("userid")); 
  });
  User
  .create({ userid:"rquintanar", name: "Ricardo Quintanar", email: "r@r.com", password:"you", role: "admin" })
  .then(user => {
    console.log(user.get("name")); 
    console.log(user.get("userid")); 
  });



  return User;
};

