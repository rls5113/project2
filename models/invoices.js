module.exports = function(sequelize, DataTypes) {
  var Invoice = sequelize.define("Invoice", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    // customerid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    total: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    }
  });
  Invoice.associate = function(models) {
    Invoice.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
    Invoice.hasMany(models.Invoiceitem, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Invoice.create({
    date: sequelize.NOW,
    total: "2.0",
    customerId: "1"
  }).then(function(invoice) {
    console.log("date: " + invoice.get("date"));
    console.log("total: " + invoice.get("total"));
    console.log("customerId: " + invoice.get("customerId"));
  });

  return Invoice;
};
