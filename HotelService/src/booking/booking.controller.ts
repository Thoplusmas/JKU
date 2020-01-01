import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiUseTags, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';
import { BookingService } from './room.service';

@Controller('booking')
@ApiUseTags('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }

    @Post()
    @ApiCreatedResponse({ type: Booking, description: 'Returns newly created booking' })
    @ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' })
    public async createBooking(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
        return this.bookingService.createBooking(createBookingDto);
    }
}
