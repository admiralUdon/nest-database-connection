import { Injectable } from "@nestjs/common";
import { mssqlConfig } from "app/config/mssql.config";
import * as sql from 'mssql';
 
@Injectable()
export class MsSQLService {
 
    private config: sql.config;
 
    constructor() {
        this.config = mssqlConfig();
    }
 
    async query(query: string) {
        try {

            const pool = await new sql.ConnectionPool(this.config).connect();
            const result = await pool.request().query(query);

            return result.recordset
 
        } catch (error) {
            throw new Error(`Error querying the database: ${error.message}`);
        }
    }
}