import { isEmpty } from 'src/common/helpers/object.helper';
import { CustomResponse } from './custom-response.interface';
import { NestResponse } from './nest-response';

export class NestResponseBuilder {
    private resposta: NestResponse = {
        status: 200,
        headers: {},
        body: {
            success: true,
            message: ''
        }
    };

    setStatus(status: number) {
        this.resposta.status = status;
        return this;
    }

    setHeader(headers: object) {
        if (isEmpty(headers)) return this;

        this.resposta.headers = headers;
        return this;
    }

    setBody(body: CustomResponse) {
        this.resposta.body = body;
        return this;
    }

    build() {
        return new NestResponse(this.resposta);
    }
}
