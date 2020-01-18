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
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const booking_entity_1 = require("./booking.entity");
const room_service_1 = require("../room/room.service");
const room_already_booked_exception_1 = require("./exceptions/room-already-booked.exception");
let BookingService = class BookingService {
    constructor(bookingRepository, roomService) {
        this.bookingRepository = bookingRepository;
        this.roomService = roomService;
    }
    createBooking(createBookingDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const overlappingBookings = yield this.bookingRepository.createQueryBuilder('booking')
                .andWhere('booking.roomId = :roomId', { roomId: createBookingDto.roomId })
                .andWhere('((:from <= booking.to) AND (booking.from <= :to))', { from: createBookingDto.from, to: createBookingDto.to })
                .getMany();
            if (overlappingBookings && overlappingBookings.length > 0) {
                throw new room_already_booked_exception_1.RoomAlreadyBookedException();
            }
            const newBooking = new booking_entity_1.Booking();
            newBooking.from = createBookingDto.from;
            newBooking.to = createBookingDto.to;
            newBooking.room = yield this.roomService.getOne(createBookingDto.roomId);
            return yield this.bookingRepository.save(newBooking);
        });
    }
    deleteBooking(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return ((yield this.bookingRepository.delete(id)).affected) === 1;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookingRepository.find();
        });
    }
};
BookingService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(booking_entity_1.Booking)),
    __metadata("design:paramtypes", [typeorm_1.Repository, room_service_1.RoomService])
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map