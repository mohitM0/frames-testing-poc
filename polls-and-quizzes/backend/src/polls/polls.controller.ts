import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PollsService } from './polls.service';
import { Poll } from './poll.entity';
import { createPollDto } from './dtos/create-poll.dto';

@Controller('polls')
export class PollsController {

    constructor(private readonly pollsService: PollsService) {}

    @Post("createPoll")
    async createPoll(@Body() createPollDto: createPollDto): Promise<Poll>
    {
        return await this.pollsService.createPoll(createPollDto.question, createPollDto.options);
    }

    @Get(':id')
    async getPoll(@Param('id') id: number): Promise<Poll>
    {
        return await this.pollsService.getPoll(id);
    }

    @Post(':id/vote/:index')
    async vote(@Param('id') id: number, @Param('index') index: number): Promise<Poll>
    {
        // get the current poll and add the vote
        const poll = await this.pollsService.getPoll(id);
        let new_poll = new Poll();
        if (poll.votes.includes(index))
        {
           new_poll.votes =[...poll.votes];
           new_poll.votes[index] += 1;
        }
        return await this.pollsService.vote(id, new_poll);
    }

    @Get()
    async getPolls(): Promise<Poll[]>
    {
        return await this.pollsService.getPolls();
    }
}
