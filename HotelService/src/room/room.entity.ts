import { ApiModelProperty, ApiUseTags } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ApiUseTags('room')

export class Room {

    @PrimaryGeneratedColumn()
    @ApiModelProperty()
    public id: number;

    @Column()
    @ApiModelProperty({ description: 'Description of the room', required: true, example: 'Wunderschönes Doppelzimmer mit Meerblick' })
    public description: string;

    @Column({
        nullable: false,
    })
    @ApiModelProperty({ description: 'Number of beds in the room', required: true, minimum: 1 })
    public beds: number;


}