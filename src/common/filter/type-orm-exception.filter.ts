import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { TypeORMError } from 'typeorm';

@Catch(TypeORMError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
    catch(exception: TypeORMError, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        const message: string = (exception as TypeORMError).message;
        const code: number = (exception as any).code;
        const customResponse = {
            status: 500,
            message: 'Something Went Wrong',
            type: 'Internal Server Error',

            errorCode: 300
        };

        response.status(customResponse.status).json(customResponse);
    }
}
