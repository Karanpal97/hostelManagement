import { IsEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsEmpty()
  @IsNumber()
  roomId;
  @IsEmpty()
  @IsNumber()
  studentId;
}
