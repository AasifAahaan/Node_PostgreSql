import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

    dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST || 'localhost', 
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT || '5432', 10), 
});

// FOR DOCKER... 
// export const sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
//     host: 'host.docker.internal',
//     dialect: 'postgres',
//     port: 5432,
// });

export const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection has been established successfully.');
        await sequelize.sync({ alter: true });
        console.log('✅ Database synchronized with models successfully!');
    } catch (error: any) {
        console.error('❌ Unable to connect to the database:', error);
        process.exit(1);
    }
};
