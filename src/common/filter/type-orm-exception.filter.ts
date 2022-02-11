import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpCode,
    HttpStatus
} from '@nestjs/common';
import { TypeORMError } from 'typeorm';
import { AbstractExceptionFilter } from './abstract-exception-filter';

@Catch(TypeORMError)
export class TypeOrmExceptionFilter extends AbstractExceptionFilter<TypeORMError> {
    makeCustomResponse(
        exception: TypeORMError,
        response: Object,
        request: Object
    ) {
        const errType: number = (exception as any).code;
        const errNum: number = (exception as any).errno;
        const msg: string = (exception as any).sqlMessage;

        return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: msg,
            type: errType,
            errorCode: errNum,
            err: exception
        };
    }
}
