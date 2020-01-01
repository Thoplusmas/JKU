import { ApiModelProperty } from '@nestjs/swagger';
import { Room } from '../room/room.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    @ApiModelProperty()
    public id: number;

    @ManyToOne(type => Room, { eager: true })
    @ApiModelProperty({ description: 'The room that this booking is for', required: true })
    public room: Room;

    @Column({
        nullable: false,
    })
    @ApiModelProperty({
        description: 'The start date of the booking',
        required: true,
        nullable: false,
    })
    public from: Date;

    @Column({
        nullable: false,
    })
    @ApiModelProperty({
        description: 'The end date of the booking',
        required: true,
        nullable: false,
    })
    public to: Date;

}