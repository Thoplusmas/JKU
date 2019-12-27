import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    public async registerUser(@Body() createUserDto: CreateUserDto): Promise<boolean> {
        return this.authService.registerUser(createUserDto);
    }
}
