import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from '../room/room.module';

@Module({

    imports: [
        TypeOrmModule.forFeature([Booking]),
        RoomModule,
    ],
    controllers: [BookingController],
    providers: [BookingService],
})
export class BookingModule { }
