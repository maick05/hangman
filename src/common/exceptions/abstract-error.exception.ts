import { HttpException } from '@nestjs/common';

export abstract class ErrorException extends HttpException {
    public type: string;

    constructor(
        public message: string,
        status: number,
        public errCode: number = -1
    ) {
        super(message, status);
    }

    getTypeError(): string {
        return this.constructor.name;
    }
}
