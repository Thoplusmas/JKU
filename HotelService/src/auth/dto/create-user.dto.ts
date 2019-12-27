import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    public firstName: string;

    @IsNotEmpty()
    public lastName: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsNotEmpty()
    @MinLength(6)
    public password: string;
}
