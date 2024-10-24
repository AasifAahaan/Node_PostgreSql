import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../config/database"


interface StateAttributes {
    id: number;
    abbreviation: string;
    name: string;
}

interface StateCreationAttributes extends Optional<StateAttributes, 'id'> {}

class State extends Model<StateAttributes, StateCreationAttributes> implements StateAttributes {
    public id!: number;
    public abbreviation!: string;
    public name!: string;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

State.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        abbreviation: {
            type: DataTypes.STRING(5),
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        sequelize, 
        modelName: 'State', 
        tableName: 'states', 
        timestamps: true, 
        underscored: true,
    }
);

export default State;