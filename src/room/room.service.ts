import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepo: Repository<Room>,
  ) {}
  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    return await this.roomRepo.save(createRoomDto);
  }

  findAll() {
    return `This action returns all room`;
  }

  async findOne(id: number) {
    return await this.roomRepo.findOneBy({ room_id: id });
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
