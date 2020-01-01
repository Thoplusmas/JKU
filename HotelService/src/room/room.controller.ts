import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';
import { ApiCreatedResponse, ApiBadRequestResponse, ApiImplicitBody } from '@nestjs/swagger';
import { Room } from './room.entity';

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Post()
    @ApiCreatedResponse({ type: Room, description: 'Returns newly created room' })
    @ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' })
    public async create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
        return this.roomService.create(createRoomDto);
    }
}
