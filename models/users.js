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
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    }
  });

  //This will check if hashed password entered by user can be compared to the hashed password stored in the database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // This runs before the user is created, This is hashing our password before it's entered into the database
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
