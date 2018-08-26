export type RespuestaServidor<T> = {
    mensaje?: string;
    satisfactorio: boolean;
    resultado?: T;
};
