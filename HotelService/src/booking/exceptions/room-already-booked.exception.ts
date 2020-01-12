import { HttpException, HttpStatus } from '@nestjs/common';

export class RoomAlreadyBookedException extends HttpException {
    constructor(message: string | object | any = 'The Room is already booked for this time period', error = HttpStatus.FORBIDDEN) {
        super(
            message,
            HttpStatus.FORBIDDEN,
        );
    }
}
