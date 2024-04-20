import { PrimaryGeneratedColumn, JoinColumn, Entity, ManyToOne } from 'typeorm';
import { Room } from 'src/room/entities/room.entity';
import { Student } from 'src/student/entities/student.entity';

@Entity('booking')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, (room) => room.bookings)
  @JoinColumn({ name: 'room_id' })
  roomId: Room;

  @ManyToOne(() => Student, (student) => student.bookings)
  @JoinColumn({ name: 'student_id' })
  studentId: Student;
}
