import { Catch, HttpStatus } from '@nestjs/common';
import { TypeORMError } from 'typeorm';
import { AbstractExceptionFilter } from './abstract-exception.filter';
import { CustomExceptionReponse } from './custom-exception-response.interface';

@Catch(TypeORMError)
export class TypeOrmExceptionFilter extends AbstractExceptionFilter<TypeORMError> {
    makeCustomResponse(exception: TypeORMError): CustomExceptionReponse {
        const errType: string = (exception as any).code;
        const errNum: number = (exception as any).errno;
        const msg: string = (exception as any).sqlMessage;

        return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: msg,
            type: errType,
            errorCode: errNum,
            err: exception
        };
    }
}
