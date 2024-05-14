import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsNumber()
  roomno;
  @IsNotEmpty()
  @IsString()
  status;
  @IsNotEmpty()
  @IsNumber()
  capacity;
}
