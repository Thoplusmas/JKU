import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';
import { ApiCreatedResponse, ApiBadRequestResponse, ApiImplicitBody, ApiUseTags, ApiNoContentResponse, ApiOkResponse, ApiModelProperty, ApiImplicitParam, ApiNotFoundResponse } from '@nestjs/swagger';
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
    @ApiOkResponse({ type: Array(Room), isArray:true,  description: 'Returns all rooms' })
    @ApiNoContentResponse({ description: 'No rooms in database' })
    public async getAll(): Promise<Array<Room>> {
        return this.roomService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: Room, description: 'Returns the room with the given ID' })
    @ApiNoContentResponse({ description: 'Given ID not in database' })
    @ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' })
    @ApiImplicitParam({name:'id', type:'number'})
    public async getOne(@Param('id')id): Promise<Room> {
        return this.roomService.getOne(id);
    } 
}
