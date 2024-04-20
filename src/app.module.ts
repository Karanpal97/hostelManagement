import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room/entities/room.entity';
import { RoomModule } from './room/room.module';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/entities/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'hostel',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      entities: [Room, Student, Booking],
      synchronize: true,
    }),
    RoomModule,
    StudentModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
