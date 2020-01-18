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
const swagger_1 = require("@nestjs/swagger");
const create_booking_dto_1 = require("./dto/create-booking.dto");
const booking_entity_1 = require("./booking.entity");
const booking_service_1 = require("./booking.service");
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    createBooking(createBookingDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookingService.createBooking(createBookingDto);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookingService.getAll();
        });
    }
    deleteBooking(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookingService.deleteBooking(id);
        });
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: booking_entity_1.Booking, description: 'Returns newly created booking' }),
    swagger_1.ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_booking_dto_1.CreateBookingDto]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createBooking", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOkResponse({ type: Array(booking_entity_1.Booking), isArray: true, description: 'Returns all bookings' }),
    swagger_1.ApiNoContentResponse({ description: 'No bookings in database' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getAll", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOkResponse({ type: booking_entity_1.Booking, description: 'Deletes the booking with the given ID' }),
    swagger_1.ApiNoContentResponse({ description: 'Given ID not in database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Bad Request: E.G If some invalid parameters were added or missing' }),
    swagger_1.ApiImplicitParam({ name: 'id', type: 'number' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "deleteBooking", null);
BookingController = __decorate([
    common_1.Controller('booking'),
    swagger_1.ApiUseTags('booking'),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
exports.BookingController = BookingController;
//# sourceMappingURL=booking.controller.js.map