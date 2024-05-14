import { IsEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsEmpty()
  @IsNumber()
  roomid;
  @IsEmpty()
  @IsNumber()
  studentid;
}
