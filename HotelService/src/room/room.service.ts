import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomService {

    constructor(@InjectRepository(Room)
    private readonly roomRepository: Repository<Room>) {

    }

    public async create(createRoomDto: CreateRoomDto): Promise<Room> {
        return await this.roomRepository.save(createRoomDto);
    }

    public async getAll(): Promise<Array<Room>> {
        return this.roomRepository.find();
    }

    public async getOne(id): Promise<Room> {
        return this.roomRepository.findOne(id);
    }
}
