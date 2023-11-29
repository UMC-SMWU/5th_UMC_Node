const Sequelize = require('sequelize');

class Store extends Sequelize.Model {
    static initiate(sequelize) {
        Store.init(
            {
                name: {
                    type: Sequelize.STRING(15),
                    allowNull: false,
                },
                address: {
                    type: Sequelize.STRING(30),
                    allowNull: false,
                },
                region_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: 'Store',
                tableName: 'store',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.Store.belongsTo(db.Region, { foreignKey: 'region_id' });
        db.Store.hasMany(db.Mission, { foreignKey: 'store_id' });
    }
}

module.exports = Store;
