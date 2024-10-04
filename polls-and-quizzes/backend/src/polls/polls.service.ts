import { Injectable } from '@nestjs/common';
import { Poll } from './poll.entity';
import { v4 as uuidv4 } from 'uuid';
import { PollsRepository } from 'src/polls/polls_repository';
import { updatePollDto } from './dtos/create-poll.dto';

@Injectable()
export class PollsService {

    constructor(private readonly databaseModule : PollsRepository) {}

    
    async createPoll(question: string, options: string[]) : Promise<Poll> {
        return this.databaseModule.create({id: uuidv4(), question, options, votes: new Array(options.length).fill(0)});
    }

    async getPoll(id: number): Promise<Poll> {

        let poll = this.databaseModule.findOne({id: id});

        if (!poll) {
            throw new Error('Poll not found');
        }

        return poll;
    }

    async vote(id: number, pollUpdates: updatePollDto): Promise<Poll> {
        return this.databaseModule.findOneAndUpdate({id: id}, pollUpdates);
    }

    async getPolls(): Promise<Poll[]> {
        return this.databaseModule.find({});
    }
}
