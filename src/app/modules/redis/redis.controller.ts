import { Controller, Get, HttpStatus, Request } from '@nestjs/common';
import { RedisService } from 'app/core/services/redis/redis.service';
import { CustomHttpResponse } from 'app/shared/custom/http-response/http-response.service';

@Controller()
export class RedisController {

    constructor(
        private _redisService: RedisService
    ){
    }
    
    @Get()
    async getHello(@Request() request) {

        const data = await this._redisService.getOrSetCache(request.url, () => {
            return {
                message: "next response will be cached for 10 second!!",
                timestamp: new Date()
            }
        });
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
