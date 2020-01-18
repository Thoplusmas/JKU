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
const typeorm_1 = require("typeorm");
let Room = class Room {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], Room.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiModelProperty({ description: 'Description of the room', required: true, example: 'Wunderschönes Doppelzimmer mit Meerblick' }),
    __metadata("design:type", String)
], Room.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    swagger_1.ApiModelProperty({ description: 'Number of beds in the room', required: true, minimum: 1 }),
    __metadata("design:type", Number)
], Room.prototype, "beds", void 0);
Room = __decorate([
    typeorm_1.Entity(),
    swagger_1.ApiUseTags('room')
], Room);
exports.Room = Room;
//# sourceMappingURL=room.entity.js.map