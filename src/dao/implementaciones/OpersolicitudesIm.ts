import { OperSolicitudes } from "../interfaces/OperSolicitudes";
export class OperSolicitudesIm implements OperSolicitudes {
    gg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8];
    getAll(): number[] {
        return this.gg;
    }
}
