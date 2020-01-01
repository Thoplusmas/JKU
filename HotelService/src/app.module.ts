import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { RoomModule } from './room/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BookingModule,
    RoomModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
