import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface VehicleAttributes {
    id: number;
    city: string;
    carName: string;
    brandName: string;
    seatingCapacity: string;
    vehicleDescriptions: string;
    vehicleSpecifications: {
        body: string;
        make: string;
        transmission: string;
        vin: string;
        year: string;
        mileage: string;
        fuelType: string;
        engine: string;
        door: string;
        brake: string;
        driveTrain: string;
        AC: string;
    };
    carFeatures: {
        multiZoneAC: boolean;
        premiumSoundSystem: boolean;
        cylinders: number;
        androidAuto: boolean;
        keylessStart: boolean;
        intermittentWipers: boolean;
        navigationSystem: boolean;
        memorySeat: boolean;
        bluetooth: boolean;
        heatedFrontSeats: boolean;
        powerWindows: number;
        adaptiveCruiseControl: boolean;
    };
    extraService: {
        packageType: string;
        freeKmsForRental: number;
        extraKmCharges: number;
        insurance: string;
        roadSideAssistance: string;
        fuel: string;
        babySeat: string;
    };
    vehicleRegistrationNumber: string;
    available: boolean;
    bookingDate: Date;
    featuredImage: {
        image: string;
        alt: string;
    };
    imageGallery: {
        image: string;
        alt: string;
    }[];
    customerFeedback: string;
    starRating: string;
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    bookingOptions: {
        withDriver: {
            name: string;
            local: {
                packageType: BookingOptions;
                name: string;
            };
            outstation: {
                packageType: OutstationBooking;
                name: string;
            };
        };
        selfDrive: {
            packageType: BookingOptions;
            name: string;
        };
        subscription: {
            packageType: BookingOptions;
            name: string;
        };
    };
}

interface BookingOptions {
    package1: {
        duration: string;
        price: number;
    };
    package2: {
        duration: string;
        price: number;
    };
    package3: {
        duration: string;
        price: number;
    };
    kmsLimit?: string;
    fuel?: string;
    extraKmsCharge?: string;
    tollsParkingTaxes?: string;
    DoorstepDeliveryPickup: number;
    gst: string;
    refundableDeposit: number;
}

interface OutstationBooking {
    package1: {
        ratePerKm: number;
    };
    package2: {
        ratePerKm: number;
    };
    package3: {
        ratePerKm: number;
    };
}

interface VehicleCreationAttributes extends Optional<VehicleAttributes, 'id'> { }

class Vehicle extends Model<VehicleAttributes, VehicleCreationAttributes> implements VehicleAttributes {
    public id!: number;
    public city!: string;
    public carName!: string;
    public brandName!: string;
    public seatingCapacity!: string;
    public vehicleDescriptions!: string;
    public vehicleSpecifications!: {
        body: string;
        make: string;
        transmission: string;
        vin: string;
        year: string;
        mileage: string;
        fuelType: string;
        engine: string;
        door: string;
        brake: string;
        driveTrain: string;
        AC: string;
    };
    public carFeatures!: {
        multiZoneAC: boolean;
        premiumSoundSystem: boolean;
        cylinders: number;
        androidAuto: boolean;
        keylessStart: boolean;
        intermittentWipers: boolean;
        navigationSystem: boolean;
        memorySeat: boolean;
        bluetooth: boolean;
        heatedFrontSeats: boolean;
        powerWindows: number;
        adaptiveCruiseControl: boolean;
    };
    public extraService!: {
        packageType: string;
        freeKmsForRental: number;
        extraKmCharges: number;
        insurance: string;
        roadSideAssistance: string;
        fuel: string;
        babySeat: string;
    };
    public vehicleRegistrationNumber!: string;
    public available!: boolean;
    public bookingDate!: Date;
    public featuredImage!: {
        image: string;
        alt: string;
    };
    public imageGallery!: {
        image: string;
        alt: string;
    }[];
    public customerFeedback!: string;
    public starRating!: string;
    public metaTitle?: string;
    public metaDescription?: string;
    public keywords?: string;
    public bookingOptions!: {
        withDriver: {
            name: string;
            local: {
                packageType: BookingOptions;
                name: string;
            };
            outstation: {
                packageType: OutstationBooking;
                name: string;
            };
        };
        selfDrive: {
            packageType: BookingOptions;
            name: string;
        };
        subscription: {
            packageType: BookingOptions;
            name: string;
        };
    };

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the Vehicle model
Vehicle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brandName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        seatingCapacity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicleDescriptions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicleSpecifications: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        carFeatures: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        extraService: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        vehicleRegistrationNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        bookingDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        featuredImage: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        imageGallery: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false,
        },
        customerFeedback: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        starRating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        metaTitle: {
            type: DataTypes.STRING,
        },
        metaDescription: {
            type: DataTypes.STRING,
        },
        keywords: {
            type: DataTypes.STRING,
        },
        bookingOptions: {
            type: DataTypes.JSONB,
            allowNull: false,
            defaultValue: {
                withDriver: {
                    name: 'With Driver',
                    local: {
                        packageType: {},
                        name: 'Local',
                    },
                    outstation: {
                        packageType: {},
                        name: 'Out-station',
                    },
                },
                selfDrive: {
                    packageType: {},
                    name: 'Self-Driving',
                },
                subscription: {
                    packageType: {},
                    name: 'Subscription',
                },
            },
        },
    },
    {
        sequelize,
        modelName: 'Vehicle',
        tableName: 'vehicles',
        timestamps: true,
    }
);

export default Vehicle;
