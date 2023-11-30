import { Controller, Get, HttpStatus, Request } from '@nestjs/common';
import { MsSQLService } from 'app/core/services/mssql/mssql.service';
import { CustomHttpResponse } from 'app/shared/custom/http-response/http-response.service';

@Controller()
export class MsSQLController {

    constructor(
        private _msSQLService: MsSQLService
    ){
    }
    
    @Get()
    async getHello(@Request() request) {

        const data = await this._msSQLService.query("SELECT getdate() AS TIMESTAMP");
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
