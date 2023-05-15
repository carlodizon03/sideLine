import { DatabaseModule } from "./database/orm-utils";
import { AppDataSource } from "./database/data-source";

DatabaseModule.initDatabaseConnection(AppDataSource);
