import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { RoomStatus } from './entities/room.entity';
import { apiResponse } from 'src/type/apiResponse';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepo: Repository<Room>,
  ) {}
  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    return await this.roomRepo.save(createRoomDto);
  }

  async findAll(): Promise<apiResponse> {
    try {
      const rooms = await this.roomRepo.find({
    
      });
      return {
        message: 'successfully get all the rooms',
        success: true,
        data: rooms,
      };
    } catch (error) {
      throw new HttpException('no room is available', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number) {
    try {
      return await this.roomRepo.findOneBy({ room_id: id });
      // return { message: 'successfully get the room', room };
    } catch (error) {
      throw new HttpException('room is not availble', HttpStatus.NOT_FOUND);
    }
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
