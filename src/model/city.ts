import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../config/database"

interface CityAttributes {
    id: number,
    name: string,
    description: string,
}

interface CityCreationAttributes extends Optional<CityAttributes, 'id'> { }

class City extends Model<CityAttributes, CityCreationAttributes> implements CityAttributes {
    public id!: number;
    public name!: string;
    public description!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

City.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'City',
        tableName: 'cities',
        timestamps: true,
    }
)

export default City