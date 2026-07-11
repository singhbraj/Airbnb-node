import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";


const sequelize = new Sequelize({

    username: dbConfig.DB_USER || 'root',
    password: dbConfig.DB_PASSWORD || '',
    database: dbConfig.DB_NAME || 'test_db',
    host: dbConfig.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging:true,


}) 


export default sequelize;