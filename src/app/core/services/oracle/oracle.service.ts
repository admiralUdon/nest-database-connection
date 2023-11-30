import { Injectable } from '@nestjs/common';
import { oracleConfig } from 'app/config/oracle.config';
import * as oracledb from 'oracledb';

@Injectable()
export class OracleService {
    
    constructor(){
        const { libDir } = oracleConfig();
        oracledb.initOracleClient({ libDir });
    }

    async query(queryString: string, binds: any = {}) {
        
        let connection;
        const { connectString, user, password } = oracleConfig();

        try {
            connection = await oracledb.getConnection({
                user,
                password,
                connectString
            });

            const result = await connection.execute(queryString, binds, { autoCommit: true });
            const metaData = result.metaData;
            const rows = result.rows;

            /**
             * TODO: Instead of using loop to create an object, 
             * it is better to find a better way to transform the rows from db
             * and return it to rest api
             */
            const resultArray = rows.map((row) => {
                const obj = {};
                for (let i = 0; i < metaData.length; i++) {
                    obj[metaData[i].name] = row[i];
                }
                return obj;
            });
            return resultArray;
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }
}