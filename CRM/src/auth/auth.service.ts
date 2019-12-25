import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {

    /**
     * Dummy service that returns success if dto properties are there
     * We should save the user here, or rather create a user module that then saves the user
     * @param userDto
     */
    registerUser(userDto: CreateUserDto): boolean {
        if (userDto.firstName && userDto.lastName && userDto.email && userDto.password) {
            console.log("User with the following information created: ", userDto);
            return true;
        }

        return false;
    }
}
