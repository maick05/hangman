export interface CustomExceptionReponse {
    status: number;
    success: boolean;
    message: string;
    type: string;
    errorCode: number;
    err: Object;
}
