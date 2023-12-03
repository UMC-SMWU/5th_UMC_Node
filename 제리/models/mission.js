const Sequelize = require('sequelize');

class Mission extends Sequelize.Model {
    static initiate(sequelize) {
        Mission.init(
            {
                store_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                target_amount: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                reward: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                deadline: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: 'Mission',
                tableName: 'mission',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.Mission.belongsToMany(db.User, { through: db.UserMission });
        db.Mission.belongsTo(db.Store, { foreignKey: 'store_id' });
        db.Mission.hasMany(db.Review, { foreignKey: 'mission_id' });
    }
}

module.exports = Mission;
