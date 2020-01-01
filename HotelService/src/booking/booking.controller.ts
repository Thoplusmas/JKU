import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';
import { BookingService } from './room.service';

@Controller('booking')
@ApiUseTags('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }

    @Post()
    public async createBooking(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
        return this.bookingService.createBooking(createBookingDto);
    }
}
