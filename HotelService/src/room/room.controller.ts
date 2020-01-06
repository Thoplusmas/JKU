import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';
import { ApiCreatedResponse, ApiBadRequestResponse, ApiImplicitBody, ApiUseTags } from '@nestjs/swagger';
import { Room } from './room.entity';

@Controller('room')
@ApiUseTags('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Post()
    @ApiCreatedResponse({ type: Room, description: 'Returns newly created room' })
    @ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' })
    public async create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
        return this.roomService.create(createRoomDto);
    }

    @Get()
    public async getAll(): Promise<Array<Room>> {
        return this.roomService.getAll();
    }

    @Get(':id')
    public async getOne(@Param('id')id): Promise<Room> {
        return this.roomService.getOne(id);
    }

}
