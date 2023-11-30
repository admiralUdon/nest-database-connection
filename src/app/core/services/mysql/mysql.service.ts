import { Injectable } from '@nestjs/common';
import { mysqlConfig } from 'app/config/mysql.config';
import * as mySQL from 'mysql2/promise';

@Injectable()
export class MySQLService {
    private readonly pool: mySQL.Pool;

    constructor() {
        this.pool = mySQL.createPool(mysqlConfig());
    }

    async query(query): Promise<any> {
        const connection = await this.pool.getConnection();
        try {
            const [rows, fields] = await connection.query(query);
            return rows;
        } finally {
            connection.release();
        }
    }
}