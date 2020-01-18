"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const room_entity_1 = require("../room/room.entity");
const typeorm_1 = require("typeorm");
let Booking = class Booking {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => room_entity_1.Room, { eager: true }),
    swagger_1.ApiModelProperty({ description: 'The room that this booking is for', required: true }),
    __metadata("design:type", room_entity_1.Room)
], Booking.prototype, "room", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    swagger_1.ApiModelProperty({
        description: 'The start date of the booking',
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], Booking.prototype, "from", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    swagger_1.ApiModelProperty({
        description: 'The end date of the booking',
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], Booking.prototype, "to", void 0);
Booking = __decorate([
    typeorm_1.Entity()
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=booking.entity.js.map