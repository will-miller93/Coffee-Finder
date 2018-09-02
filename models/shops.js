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
            validate: {
                len: [1]
            }
        },
        hours: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1],
                isUrl: true
            }
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1],
                isUrl: true
            }
        },
        instagram: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1],
                isUrl: true
            }
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1],
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
            validate: {
                len: [1]
            }
        },
        menu: {
            type: DataTypes.BLOB('long'),
            allowNull: true,
        
        }

    });
    return Shops;
};