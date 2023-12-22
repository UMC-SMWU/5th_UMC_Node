const Sequelize = require('sequelize');

class UserMission extends Sequelize.Model {
    static initiate(sequelize) {
        UserMission.init(
            {
                status: {
                    type: Sequelize.TINYINT(1),
                    allowNull: false,
                    defaultValue: 0,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: 'UserMission',
                tableName: 'userMission',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.UserMission.belongsTo(db.Mission, { foreignKey: 'mission_id' });
        db.UserMission.belongsTo(db.User, { foreignKey: 'user_id' });
    }
}

module.exports = UserMission;
