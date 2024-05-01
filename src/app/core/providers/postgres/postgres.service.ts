/**
 * 
 * Please update this so that we can track the latest version.
 * 
 * Author           : Ahmad Miqdaad (ahmadmiqdaadz[at]gmail.com)
 * Last Contributor : Ahmad Miqdaad (ahmadmiqdaadz[at]gmail.com)
 * Last Updated     : 1 May 2024
 * 
 * **/

import { Injectable, Logger } from '@nestjs/common';
import { postgresConfig } from 'app/config/postgres.config';
import { Pool, ConnectionConfig } from 'pg';

@Injectable()
export class PostgresService {

    private config: ConnectionConfig;
    private pool: Pool;
    private readonly logger = new Logger(PostgresService.name);

    /**
     * Constructor
     */

    constructor() {
        this.initialiseDb();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    async query(query): Promise<any[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query(query);
            return result.rows;
        } finally {
            client.release();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private async initialiseDb() {
        try {
            this.config = postgresConfig();
            this.pool = new Pool(this.config);
            this.logger.debug(`Posgres Database successfully initialized`);
        } catch (error) {
            this.logger.error(`Failed to initialize Posgres Client: ${error}`);
        }
    }
}