"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerResponse {
    successful(resBD) {
        const response = {
            successful: true,
            result: resBD,
        };
        return response;
    }
    throwError(message) {
        const response = {
            successful: false,
            message: message
        };
        return response;
    }
}
exports.ServerResponse = ServerResponse;
