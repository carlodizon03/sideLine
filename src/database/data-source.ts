import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./user/user.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User], //TODO
  subscribers: [],
  migrations: [],
});
