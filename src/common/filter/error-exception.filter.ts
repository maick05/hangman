import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { AbstractExceptionFilter } from './abstract-exception.filter';
import { CustomExceptionReponse } from './custom-exception-response.interface';

@Catch()
export class ErrorExceptionFilter extends AbstractExceptionFilter<Error> {
    makeCustomResponse(exception: Error): CustomExceptionReponse {
        return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: exception.message,
            type: exception.name,
            errorCode: HttpStatus.INTERNAL_SERVER_ERROR,
            err: exception
        };
    }
}
