"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class RoomAlreadyBookedException extends common_1.HttpException {
    constructor(message = 'The Room is already booked for this time period', error = common_1.HttpStatus.FORBIDDEN) {
        super(message, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.RoomAlreadyBookedException = RoomAlreadyBookedException;
//# sourceMappingURL=room-already-booked.exception.js.map