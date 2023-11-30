import { Injectable } from '@nestjs/common';
import { postgresConfig } from 'app/config/postgres.config';
import { Pool } from 'pg';

@Injectable()
export class PostgresService {
    private readonly pool: Pool;

    constructor() {
        this.pool = new Pool(postgresConfig());
    }

    async query(query): Promise<any[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query(query);
            return result.rows;
        } finally {
            client.release();
        }
    }
}