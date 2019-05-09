module.exports = function(sequelize, DataTypes) {
  var Invoiceitem = sequelize.define("Invoiceitem", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    // invoiceid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: Invoice,
    //     key: "id"
    //   }
    // },
    // itemid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: Item,
    //     key: "id"
    //   }
    // },
    qty: {
      type: DataTypes.INTEGER
    },
    cost: {
      type: DataTypes.FLOAT
    },
    total: {
      type: DataTypes.FLOAT
    }
  });
  Invoiceitem.associate = function(models) {
    Invoiceitem.hasOne(models.Item, {
      onDelete: "SET NULL"
    });
  };
  Invoiceitem.associate = function(models) {
    Invoiceitem.belongsTo(models.Invoice, {
      onDelete: "SET NULL"
    });
  };

  return Invoiceitem;
};
