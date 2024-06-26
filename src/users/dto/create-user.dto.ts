import { IsBoolean, IsEmail, IsInt, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsStrongPassword()
    password: string;

    @IsEmail()
    email: string;

    @IsString()
    userName: string;

    @IsInt()
    age: number;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}
