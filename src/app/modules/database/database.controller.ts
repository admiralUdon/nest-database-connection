import { Controller, Get, HttpStatus, Request } from '@nestjs/common';
import { DatabaseService } from 'app/core/services/database/database.service';
import { CustomHttpResponse } from 'app/shared/custom/http-response/http-response.service';

@Controller()
export class DatabaseController {

    constructor(
        private _databaseService: DatabaseService
    ){
    }
    
    @Get()
    async getHello(@Request() request) {

        const data = await this._databaseService.getTimestamp(request);
        const response = new CustomHttpResponse({
            code: 'OK',
            message: 'API call successfull',
            statusCode: HttpStatus.OK,
            data
        });
        request.res.statusCode = response.statusCode;
        return response;

    }
}
