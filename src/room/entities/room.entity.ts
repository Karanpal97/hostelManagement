import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';

export enum RoomStatus {
  BOOKED = 'booked',
  AVAILABLE = 'available',
}

@Entity('room')
export class Room {
  @PrimaryGeneratedColumn()
  room_id: number;
  @Column()
  roomno: number;
  @Column()
  capacity: number;
  @Column({ type: 'enum', enum: RoomStatus, default: RoomStatus.AVAILABLE })
  status: RoomStatus;

  @OneToMany(() => Booking, (booking) => booking.roomid)
  bookings: Booking[];
}
