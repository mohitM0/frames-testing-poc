import { Poll } from './poll.entity';
import { PollsRepository } from 'src/polls/polls_repository';
import { updatePollDto } from './dtos/create-poll.dto';
export declare class PollsService {
    private readonly databaseModule;
    constructor(databaseModule: PollsRepository);
    createPoll(question: string, options: string[]): Promise<Poll>;
    getPoll(id: number): Promise<Poll>;
    vote(id: number, pollUpdates: updatePollDto): Promise<Poll>;
    getPolls(): Promise<Poll[]>;
}
