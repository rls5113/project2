module.exports = function(sequelize, DataTypes) {
  var Lot = sequelize.define("Lot", {
    colorhexcode: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        len: [1, 10]
      }
    },
    totalitemcount: {
      type: DataTypes.INTEGER
    },
    cost: {
      type: DataTypes.INTEGER
    },
    purchasedate: {
      type: DataTypes.DATE
    },
    colordesc: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
  });

  Lot.associate = function(models) {
    Lot.hasMany(models.Inventoryitem, {
      // onDelete: "set null"
    });
  };


  Lot
  .create({ 
    colorhexcode:"#FF0000", 
    totalitemcount: "20", 
    purchasedate: "04/28/2019", 
    colordesc:"red", 
    cost: "300.00" 
  })
  .then(lot => {
    console.log(lot.get("colorhexcode")); 
    console.log(lot.get("cost")); 
  });

  Lot
  .create({ 
    colorhexcode:"#FFFF00", 
    totalitemcount: "30", 
    purchasedate: "04/25/2019", 
    colordesc:"yellow", 
    cost: "600.00" 
  })
  .then(lot => {
    console.log(lot.get("colorhexcode")); 
    console.log(lot.get("cost")); 
  });

  Lot
  .create({ 
    colorhexcode:"#0000FF", 
    totalitemcount: "20", 
    purchasedate: "04/30/2019", 
    colordesc:"blue", 
    cost: "200.00" 
  })
  .then(lot => {
    console.log(lot.get("colorhexcode")); 
    console.log(lot.get("cost")); 
  });


  return Lot;
};
