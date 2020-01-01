import { Controller, Get, Body, Post } from '@nestjs/common';


@Controller('booking')
export class BookingController {
    constructor() { }

    @Get()
    public async get(): Promise<string> {
        return 'booking';
    }
}
