import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { RoomService } from 'src/room/room.service';
import { EntityManager } from 'typeorm';
import { Room, RoomStatus } from 'src/room/entities/room.entity';
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepo: Repository<Booking>,
    private readonly roomService: RoomService,
    private readonly entityManager: EntityManager,
  ) {}
  async create(createBookingDto: CreateBookingDto) {
    const room = await this.roomService.findOne(createBookingDto.roomId);

    const capacity = room.capacity;

    if (capacity > 0 && room.status === RoomStatus.AVAILABLE) {
      console.log(RoomStatus.AVAILABLE);
      const result = await this.entityManager.transaction(
        async (transactionManager) => {
          await transactionManager.update(Room, room.room_id, {
            capacity: capacity - 1,
            status: capacity === 1 ? RoomStatus.BOOKED : RoomStatus.AVAILABLE,
          });

          const booking = await transactionManager.save(
            Booking,
            createBookingDto,
          );
          return { message: 'Booking created successfully', booking };
        },
      );

      return result;
    } else {
      throw new HttpException('room is not availble', HttpStatus.NOT_FOUND);
    }
  }

  async findAll() {
    try {
      return await this.bookingRepo.find({
        relations: ['studentId', 'roomId'],
      });
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch bookings');
    }
  }
  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
