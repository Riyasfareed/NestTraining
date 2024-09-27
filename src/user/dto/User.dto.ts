/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  salary: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}
