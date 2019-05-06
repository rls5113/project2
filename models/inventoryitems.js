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
        allowNull: false
      }
    });
    Inventoryitem.belongsTo(models.Lot, {
      foreignKey: {
        allowNull: false
      }
    });
    Inventoryitem.belongsTo(models.Item, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Inventoryitem;
};
