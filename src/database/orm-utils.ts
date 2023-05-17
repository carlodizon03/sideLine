import { DataSource } from "typeorm";

let dataSource: DataSource;

const initDatabaseConnection = async (source: DataSource) => {
  try {
    dataSource = await source.initialize();
  } catch (e) {
    console.log(e);
    throw new Error("Error while connecting to database");
  }
};

const closeConnection = async () => {
  dataSource.destroy();
};

export const DatabaseModule = {
  initDatabaseConnection,
  closeConnection,
};
