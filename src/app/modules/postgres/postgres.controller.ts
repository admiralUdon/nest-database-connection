import { Controller, Get, HttpStatus, Request } from '@nestjs/common';
import { PostgresService } from 'app/core/services/postgres/postgres.service';
import { CustomHttpResponse } from 'app/shared/custom/http-response/http-response.service';

@Controller()
export class PostgresController {

    constructor(
        private _postgresService: PostgresService
    ){
    }
    
    @Get()
    async getHello(@Request() request) {

        const data = await this._postgresService.query("SELECT CURRENT_TIMESTAMP AS TIMESTAMP");
        const response = new CustomHttpResponse({
            code: 'OK',
            message: 'API call successfull',
            statusCode: HttpStatus.OK,
            data: [...data]
        });
        request.res.statusCode = response.statusCode;
        return response;
        
    }
}
