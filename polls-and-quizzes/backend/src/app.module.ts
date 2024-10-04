import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollsModule } from './polls/polls.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://adityadhir97:FMhwbXBiELyiWnI7@cluster0.hsbcuay.mongodb.net/'), PollsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}