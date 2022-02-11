import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { AbstractExceptionFilter } from './abstract-exception-filter';

@Catch(HttpException)
export class HttpExceptionFilter extends AbstractExceptionFilter<HttpException> {
    makeCustomResponse(exception: HttpException, request: any) {
        return {
            status: exception.getStatus(),
            body: { res: exception.getResponse(), err: exception }
        };
    }
}
