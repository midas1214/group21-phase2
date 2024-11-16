import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, CI_ON } = process.env;

if ((!DB_NAME || !DB_USER || !DB_PASS || !DB_HOST) && !CI_ON) {
  throw new Error("Missing database configuration");
}

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres'
});

export default sequelize;