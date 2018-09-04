module.exports = function(sequelize, DataTypes) {
    var Shops = sequelize.define("shops", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hours: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        instagram: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        roaster: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
        lat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lng: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
    return Shops;
};