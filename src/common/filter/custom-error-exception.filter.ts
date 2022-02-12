import { Catch } from '@nestjs/common';
import { CustomErrorException } from '../exceptions/custom-error.exception';
import { AbstractExceptionFilter } from './abstract-exception.filter';
import { CustomExceptionReponse } from './custom-exception-response.interface';

@Catch(CustomErrorException)
export class CustomErrorExceptionFilter extends AbstractExceptionFilter<CustomErrorException> {
    makeCustomResponse(
        exception: CustomErrorException
    ): CustomExceptionReponse {
        return {
            status: exception.getStatus(),
            success: false,
            message: exception.message,
            type: exception.type,
            errorCode: exception.errCode,
            err: exception
        };
    }
}
