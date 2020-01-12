import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';
import { RoomService } from '../room/room.service';

@Injectable()
export class BookingService {

    constructor(@InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>, private roomService: RoomService) {

    }

    public async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
        const newBooking: Booking = new Booking();
        newBooking.from = createBookingDto.from;
        newBooking.to = createBookingDto.to;
        newBooking.room = await this.roomService.getOne(createBookingDto.roomId);
        return await this.bookingRepository.save(newBooking);
    }

    public async deleteBooking(id: number): Promise<boolean> {
        return ((await this.bookingRepository.delete(id)).affected) === 1;
    }

    public async getAll(): Promise<Booking[]> {
        return this.bookingRepository.find();
    }
}
