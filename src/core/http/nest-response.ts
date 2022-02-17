import { CustomResponse } from './custom-response.interface';

export class NestResponse {
    status: number;
    headers: object;
    body: CustomResponse;

    constructor(resposta: NestResponse) {
        Object.assign(this, resposta);
    }
}
