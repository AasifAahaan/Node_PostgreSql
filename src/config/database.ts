import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('node', 'postgres', 'aasif@123', {
    host: 'localhost',
    dialect: 'postgres',
});

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
