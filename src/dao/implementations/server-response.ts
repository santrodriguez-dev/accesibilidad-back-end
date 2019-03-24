import { RequestResult } from "../dto/request-result";

export class ServerResponse {
    public successful<R>(resBD: R): RequestResult<R> {
        const response: RequestResult<R> = {
            successful: true,
            result: resBD,
        }
        return response;

    }
    public throwError(message: string) {
        const response: RequestResult<null> = {
            successful: false,
            message: message
        };
        return response;
    }
}