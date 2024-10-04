import { Poll, PollDocument } from './schemas/poll.schema';
import { FilterQuery, Model } from 'mongoose';
export declare class PollsRepository {
    private pollModel;
    constructor(pollModel: Model<PollDocument>);
    findOne(userFilterQuery: FilterQuery<Poll>): Promise<Poll>;
    find(userFilterQuery: FilterQuery<Poll>): Promise<Poll[]>;
    create(poll: Poll): Promise<Poll>;
    findOneAndUpdate(userFilterQuery: FilterQuery<Poll>, poll: Partial<Poll>): Promise<Poll>;
    deleteOne(userFilterQuery: FilterQuery<Poll>): Promise<Poll>;
}
