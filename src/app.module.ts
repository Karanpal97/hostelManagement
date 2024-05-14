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
      host:"ep-white-bonus-a4leb1hc-pooler.us-east-1.aws.neon.tech",
       url: 'postgres://default:V2mhj3grBuTO@ep-white-bonus-a4leb1hc-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
      port: 5432,
      username: 'default',
      password: 'V2mhj3grBuTO',
      database: 'verceldb',
      entities: [Room, Student, Booking],
      synchronize: false
    }),
    RoomModule,
    StudentModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
