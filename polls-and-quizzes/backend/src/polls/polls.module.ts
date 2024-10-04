import { Module } from '@nestjs/common';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Poll, PollSchema } from './schemas/poll.schema';
import { PollsRepository } from './polls_repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Poll.name, schema: PollSchema }])],
  controllers: [PollsController],
  providers: [PollsService, PollsRepository],
})
export class PollsModule {}
