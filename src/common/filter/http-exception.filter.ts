import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { AbstractExceptionFilter } from './abstract-exception.filter';
import { CustomExceptionReponse } from './custom-exception-response.interface';

@Catch(HttpException)
export class HttpExceptionFilter extends AbstractExceptionFilter<HttpException> {
    getResponse(host: ArgumentsHost, exception: HttpException): Object {
        return exception.getResponse();
    }

    makeCustomResponse(exception: HttpException): CustomExceptionReponse {
        return {
            status: exception.getStatus(),
            success: false,
            message: exception.message,
            type: exception.name,
            errorCode: exception.getStatus(),
            err: exception
        };
    }
}
