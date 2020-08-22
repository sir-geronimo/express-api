import { createConnection, Connection } from "typeorm";
import dbConfig from '../config/database.config';

export const connection: Promise<Connection> = createConnection(dbConfig);
