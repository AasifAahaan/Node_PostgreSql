import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../config/database"


interface BookingAttributes {
    id: number,
    firstName: string,
    lastName: string,
    number: string,
    email: string,
    address: string,
    city: string,
    state: string,
    option: string,
    pickupLocation: string,
    pickupDateTime: Date,
    dropDateTime: Date,

    paymentMethod: string,
    paymentType: string,
}

interface BookingCreationAttributes extends Optional<BookingAttributes, 'id'> { }

class Booking extends Model<BookingAttributes, BookingCreationAttributes> implements BookingAttributes {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public number!: string;
    public email!: string;
    public address!: string;
    public city!: string;
    public state!: string;
    public option!: string;
    public pickupLocation!: string;
    public pickupDateTime!: Date;
    public dropDateTime!: Date;

    public paymentMethod!: string;
    public paymentType!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


Booking.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        option: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pickupLocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pickupDateTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dropDateTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paymentType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Booking',
        tableName: 'bookings',
        timestamps: true,
    }
);


export default Booking;