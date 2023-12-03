const Sequelize = require('sequelize');

class Review extends Sequelize.Model {
    static initiate(sequelize) {
        Review.init(
            {
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                store_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                mission_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                rating: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                content: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: true,
                modelName: 'Review',
                tableName: 'review',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.Review.belongsTo(db.User, { foreignKey: 'user_id', primaryKey: true });
        db.Review.belongsTo(db.Store, { foreignKey: 'store_id', primaryKey: true });
        db.Review.belongsTo(db.Mission, { foreignKey: 'mission_id', primaryKey: true });
    }
}

module.exports = Review;
