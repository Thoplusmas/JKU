import { Controller, Get, Body, Post, Delete, Param } from '@nestjs/common';
import { ApiUseTags, ApiCreatedResponse, ApiBadRequestResponse, ApiNoContentResponse, ApiOkResponse, ApiImplicitParam } from '@nestjs/swagger';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';

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

    @Get()
    @ApiOkResponse({ type: Array(Booking), isArray: true, description: 'Returns all bookings' })
    @ApiNoContentResponse({ description: 'No bookings in database' })
    public async getAll(): Promise<Booking[]> {
        return this.bookingService.getAll();
    }
    @Delete(':id')
    @ApiOkResponse({ type: Booking, description: 'Deletes the booking with the given ID' })
    @ApiNoContentResponse({ description: 'Given ID not in database' })
    @ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' })
    @ApiImplicitParam({ name: 'id', type: 'number' })
    public async deleteBooking(@Param('id') id: number): Promise<boolean> {
        return await this.bookingService.deleteBooking(id);
    }
}
