import { IsEmail, IsNotEmpty, MinLength, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Room } from '../../room/room.entity';

export class CreateBookingDto {

    @IsNotEmpty()
    @ApiModelProperty({
        description: 'Id of the room to book',
        required: true,
        nullable: false,
    })
    public roomId: number;

    @IsNotEmpty()
    @ApiModelProperty({
        description: 'The start date of the booking',
        required: true,
        nullable: false,
    })
    public from: Date;

    @IsNotEmpty()
    @ApiModelProperty({
        description: 'The end date of the booking',
        required: true,
        nullable: false,
    })
    public to: Date;
}
