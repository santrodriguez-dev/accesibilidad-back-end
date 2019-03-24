export type RequestResult<T> = {
    message?: string;
    successful: boolean;
    result?: T;
};
