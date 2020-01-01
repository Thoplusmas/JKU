import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';

@Injectable()
export class BookingService {

    constructor(@InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>) {

    }

    public async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
        return await this.bookingRepository.save(createBookingDto);
    }
}
