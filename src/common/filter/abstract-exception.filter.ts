import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { CustomExceptionReponse } from './custom-exception-response.interface';

@Catch()
export abstract class AbstractExceptionFilter<ExceptionType>
    implements ExceptionFilter
{
    protected httpAdapter: AbstractHttpAdapter;
    constructor(adapterHost: HttpAdapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }

    getResponse(host: ArgumentsHost, exception: ExceptionType): Object {
        return host.switchToHttp().getResponse();
    }

    catch(exception: ExceptionType, host: ArgumentsHost) {
        const response = this.getResponse(host, exception);

        const customResponse = this.makeCustomResponse(exception);

        this.httpAdapter.reply(response, customResponse, customResponse.status);
    }

    abstract makeCustomResponse(
        exception: ExceptionType
    ): CustomExceptionReponse;
}
