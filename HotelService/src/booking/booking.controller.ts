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

    @Delete(':id')
    @ApiOkResponse({ type: Booking, description: 'Deletes the booking with the given ID' })
    @ApiNoContentResponse({ description: 'Given ID not in database' })
    @ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' })
    @ApiImplicitParam({name:'id', type:'number'})
    public async deleteBooking(@Param('id') id:number) {
        return this.bookingService.deleteBooking(id);
    }
}
