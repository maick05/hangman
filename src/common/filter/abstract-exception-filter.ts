import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Catch()
export abstract class AbstractExceptionFilter<ExceptionType>
    implements ExceptionFilter
{
    protected httpAdapter: AbstractHttpAdapter;
    constructor(adapterHost: HttpAdapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }

    catch(exception: ExceptionType, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const customResponse = this.makeCustomResponse(
            exception,
            response,
            request
        );

        this.httpAdapter.reply(response, customResponse, customResponse.status);
    }

    abstract makeCustomResponse(
        exception: ExceptionType,
        response: Object,
        request: Object
    );

    // return {
    //     status: HttpStatus.INTERNAL_SERVER_ERROR,
    //     body: {
    //         statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    //         timestamp: new Date().toISOString(),
    //         message: exception.message,
    //         path: request.path,
    //         err: exception
    //     }
    // };
}
