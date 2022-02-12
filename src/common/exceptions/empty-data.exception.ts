import { HttpStatus } from '@nestjs/common';
import { ErrorException } from './abstract-error.exception';

export class EmptyDataException extends ErrorException {
    constructor(element: string = '') {
        super(
            'The ' + element + ' data cannot be empty',
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}
