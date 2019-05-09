module.exports = function(sequelize, DataTypes) {
  var Inventoryitem = sequelize.define("Inventoryitem", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    // lotid: {
    //   type: DataTypes.STRING,
    //   validate: {
    //     len: [1, 10]
    //   },
    //   allowNull: false
    // },
    // itemid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    totalinstock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalsales: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  Inventoryitem.associate = function(models) {
    Inventoryitem.belongsTo(models.Invoice, {
      foreignKey: {
        allowNull: true
      }
    });
    Inventoryitem.belongsTo(models.Lot, {
      foreignKey: {
        allowNull: true
      }
    });
    Inventoryitem.belongsTo(models.Item, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  /*  Inventoryitem.create({
    totalinstock: 30,
    totalsales: 0,
    invoiceId: 1,
    lotcolorhexcode: "#FF0000",
    itemid: 1
  }).then(function(invoiceitem) {
    console.log("totalinstock: " + invoiceitem.get("totalinstock"));
    console.log("totalsales: " + invoiceitem.get("totalsales"));
    console.log("invoiceId: " + invoiceitem.get("invoiceId"));
    console.log("itemId: " + invoiceitem.get("itemId"));
  });

  Inventoryitem.create({
    totalinstock: 30,
    totalsales: 0,
    invoiceId: 1,
    lotcolorhexcode: "#FF0000",
    itemid: 2
  }).then(function(invoiceitem) {
    console.log("totalinstock: " + invoiceitem.get("totalinstock"));
    console.log("totalsales: " + invoiceitem.get("totalsales"));
    console.log("invoiceId: " + invoiceitem.get("invoiceId"));
    console.log("itemId: " + invoiceitem.get("itemId"));
  });
*/
  return Inventoryitem;
};
