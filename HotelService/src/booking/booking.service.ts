import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';
import { RoomService } from '../room/room.service';
import { RoomAlreadyBookedException } from './exceptions/room-already-booked.exception';
import { create } from 'domain';

@Injectable()
export class BookingService {

    constructor(@InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>, private roomService: RoomService) {

    }

    public async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
        console.log(createBookingDto.roomId);
        const overlappingBookings = await this.bookingRepository.createQueryBuilder('booking')
            .andWhere('booking.roomId = :roomId', { roomId: createBookingDto.roomId })
            .andWhere('((:from <= booking.to) AND (booking.from <= :to))', { from: createBookingDto.from, to: createBookingDto.to })
            .getMany();
        if (overlappingBookings && overlappingBookings.length > 0) {
            throw new RoomAlreadyBookedException();
        }
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
