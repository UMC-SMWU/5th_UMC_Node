const Sequelize = require('sequelize');

class Region extends Sequelize.Model {
    static initiate(sequelize) {
        Region.init(
            {
                name: {
                    type: Sequelize.STRING(15),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: true,
                modelName: 'Region',
                tableName: 'region',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.Region.hasMany(db.Store, { foreignKey: 'region_id' });
    }
}

module.exports = Region;
