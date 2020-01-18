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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_room_dto_1 = require("./dto/create-room.dto");
const room_service_1 = require("./room.service");
const swagger_1 = require("@nestjs/swagger");
const room_entity_1 = require("./room.entity");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    create(createRoomDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roomService.create(createRoomDto);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roomService.getAll();
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roomService.getOne(id);
        });
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: room_entity_1.Room, description: 'Returns newly created room' }),
    swagger_1.ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "create", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOkResponse({ type: Array(room_entity_1.Room), isArray: true, description: 'Returns all rooms' }),
    swagger_1.ApiNoContentResponse({ description: 'No rooms in database' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: room_entity_1.Room, description: 'Returns the room with the given ID' }),
    swagger_1.ApiNoContentResponse({ description: 'Given ID not in database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' }),
    swagger_1.ApiImplicitParam({ name: 'id', type: 'number' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getOne", null);
RoomController = __decorate([
    common_1.Controller('room'),
    swagger_1.ApiUseTags('room'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
exports.RoomController = RoomController;
//# sourceMappingURL=room.controller.js.map