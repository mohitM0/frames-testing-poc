import { PollsService } from './polls.service';
import { Poll } from './poll.entity';
import { createPollDto } from './dtos/create-poll.dto';
export declare class PollsController {
    private readonly pollsService;
    constructor(pollsService: PollsService);
    createPoll(createPollDto: createPollDto): Promise<Poll>;
    getPoll(id: number): Promise<Poll>;
    vote(id: number, index: number): Promise<Poll>;
    getPolls(): Promise<Poll[]>;
}
