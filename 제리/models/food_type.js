const Sequelize = require('sequelize');

class FoodType extends Sequelize.Model {
    static initiate(sequelize) {
        FoodType.init(
            {
                type_name: {
                    type: Sequelize.STRING(10),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: true,
                modelName: 'FoodType',
                tableName: 'foodType',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.FoodType.belongsToMany(db.User, { through: 'UserFoodType' });
    }
}

module.exports = FoodType;
