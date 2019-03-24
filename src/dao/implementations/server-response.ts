import { RequestResult } from "../../dto";

export class ServerResponse {
    public successful<R>(resBD: R): RequestResult<R> {
        const response: RequestResult<R> = {
            successful: true,
            result: resBD,
        }
        return response;

    }
    public throwError<R>(message: string): RequestResult<R> {
        const response: RequestResult<R> = {
            successful: false,
            message: message
        };
        return response;
    }
}