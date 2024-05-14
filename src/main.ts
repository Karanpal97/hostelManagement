// main.ts

import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors(); 
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
