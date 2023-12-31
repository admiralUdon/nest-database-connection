import { HttpException, HttpStatus } from '@nestjs/common';
import { ISO8601DateTime } from 'app/core/utils/date.util';
 
/**
* TODO: Do documentation
*/
export class CustomHttpException extends HttpException {
    constructor(params: {
        message: string,
        statusCode: HttpStatus,
        module?: string;
        code?: string,
        additionalMessage?: any,
        error?: string,
    }) {
        const { statusCode, message, code, additionalMessage, error } = params;
        const { module } = (process.env.ENABLE_DEBUGGING !== "true") ? { module: undefined } : params;
        const timestamp = ISO8601DateTime(new Date());
        super({ statusCode, timestamp, message, module, code, additionalMessage, error }, statusCode);
    }
}