import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn()
  student_id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phonenumber: string;
  @OneToMany(() => Booking, (booking) => booking.studentid)
  bookings: Booking[];
}
