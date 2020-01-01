import { IsEmail, IsNotEmpty, MinLength, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateRoomDto {

    @IsNotEmpty()
    @ApiModelProperty({ required: true })
    public description: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiModelProperty({ required: true })
    public beds: number;
}
