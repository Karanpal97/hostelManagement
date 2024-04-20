import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name;
  @IsEmail()
  @IsNotEmpty()
  email;
  @IsNotEmpty()
  phoneNumber;
}
