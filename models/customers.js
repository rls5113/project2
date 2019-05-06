module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 25]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        len: [1, 75]
      }
    }
  });

  Customer.associate = function(models) {
    Customer.hasMany(models.Invoice, {
      onDelete: "set null"
    });
  };
  
  Customer
  .create({ 
    firstname:"Herman", 
    lastname: "Munster", 
    email: "herman@munsters.com" 
  })
  .then(customer => {
    console.log(customer.get("firstname")); 
    console.log(customer.get("email")); 
  });

  Customer
  .create({ 
    firstname:"Homer", 
    lastname: "Simpson", 
    email: "homer@simpsons.com" 
  })
  .then(customer => {
    console.log(customer.get("firstname")); 
    console.log(customer.get("email")); 
  });

  Customer
  .create({ 
    firstname:"Chuck", 
    lastname: "Norris", 
    email: "cnorris@kungfu.com" 
  })
  .then(customer => {
    console.log(customer.get("firstname")); 
    console.log(customer.get("email")); 
  });

  return Customer;
};
