/**
 * 
 * Please update this so that we can track the latest version.
 * 
 * Author           : Ahmad Miqdaad (ahmadmiqdaadz[at]gmail.com)
 * Last Contributor : Ahmad Miqdaad (ahmadmiqdaadz[at]gmail.com)
 * Last Updated     : 1 May 2024
 * 
 * **/

import { Injectable, Logger } from "@nestjs/common";
import { mssqlConfig } from "app/config/mssql.config";
import * as sql from 'mssql';
 
@Injectable()
export class MsSQLService {
 
    private config: sql.config;
    private pool: sql.ConnectionPool;
    private readonly logger = new Logger(MsSQLService.name);

    /**
     * Constructor
     */
 
    constructor() {
        this.initialiseDb();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
 
    async query(query: string) {
        try {            
            const result = await this.pool.request().query(query);            
            return result.recordset;
        } catch (error) {
            throw new Error(`Error querying the database: ${error.message}`);
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private async initialiseDb() {
        try {
            this.config = mssqlConfig();
            this.pool = await new sql.ConnectionPool(this.config).connect();
            this.logger.debug(`Microsoft SQL Database successfully initialized`);
        } catch (error) {
            this.logger.error(`Failed to initialize Microsoft SQL Client: ${error}`);
        }
    }
}