import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsNumber()
  roomNo;
  @IsNotEmpty()
  @IsString()
  status;
  @IsNotEmpty()
  @IsNumber()
  capacity;
}
