import { Controller, Get, HttpStatus, Request } from '@nestjs/common';
import { OracleService } from 'app/core/services/oracle/oracle.service';
import { CustomHttpResponse } from 'app/shared/custom/http-response/http-response.service';

@Controller()
export class OracleController {

    constructor(
        private _oracleService: OracleService
    ){
    }
    
    @Get()
    async getHello(@Request() request) {

        const data = await this._oracleService.query("SELECT SYSTIMESTAMP AS TIMESTAMP FROM DUAL");
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
