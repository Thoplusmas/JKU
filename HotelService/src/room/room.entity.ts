import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Room {

    @PrimaryGeneratedColumn()
    @ApiModelProperty()
    public id: number;

    @Column()
    @ApiModelProperty({ description: 'Description of the room', required: true, example: 'Wunderschönes Doppelzimmer mit Meerblick' })
    public description: string;
}