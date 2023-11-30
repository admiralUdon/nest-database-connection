import { Controller, Get, HttpStatus, Request } from '@nestjs/common';
import { MySQLService } from 'app/core/services/mysql/mysql.service';
import { CustomHttpResponse } from 'app/shared/custom/http-response/http-response.service';

@Controller()
export class MySQLController {

    constructor(
        private _mySQLService: MySQLService
    ){
    }
    
    @Get()
    async getHello(@Request() request) {

        const [timestamp] = await this._mySQLService.query("SELECT now() AS TIMESTAMP");
        const info = await this._mySQLService.query(`SHOW variables like "%version%"`);

        const response = new CustomHttpResponse({
            code: 'OK',
            message: 'API call successfull',
            statusCode: HttpStatus.OK,
            data: {
                ...timestamp,
                info
            }
        });
        request.res.statusCode = response.statusCode;
        return response;
        
    }
}
