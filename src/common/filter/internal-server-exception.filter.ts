import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { AbstractExceptionFilter } from './abstract-exception-filter';

@Catch()
export class InternalServerException extends AbstractExceptionFilter<Error> {
    makeCustomResponse(exception: Error, response: Object, request: Object) {
        return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: { res: response, err: exception }
        };
    }
}
