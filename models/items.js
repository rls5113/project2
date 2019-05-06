module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    retailprice: {
      type: DataTypes.FLOAT
    },
    wholesaleprice: {
      type: DataTypes.FLOAT
    }
  });

  Item.associate = function(models) {
    Item.hasMany(models.Inventoryitem, {
      onDelete: "set null"
    });
  };

  Item
  .create({ 
    description:"Pants", 
    retailprice: 35, 
    wholesaleprice: 25 
  })
  .then(item => {
    console.log(item.get("description")); 
  });
  Item
  .create({ 
    description:"Shirt", 
    retailprice: 25, 
    wholesaleprice: 15 
  })
  .then(item => {
    console.log(item.get("description")); 
  });
  Item
  .create({ 
    description:"Dress", 
    retailprice: 35, 
    wholesaleprice: 25 
  })
  .then(item => {
    console.log(item.get("description")); 
  });

  return Item;
};
