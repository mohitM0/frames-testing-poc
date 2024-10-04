import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Poll, PollDocument } from './schemas/poll.schema';
import { FilterQuery, Model } from 'mongoose';


@Injectable()
export class PollsRepository{
  constructor(@InjectModel(Poll.name) private pollModel: Model<PollDocument>){}


  async findOne(userFilterQuery: FilterQuery<Poll>): Promise<Poll> {
    return this.pollModel.findOne(userFilterQuery);
  }

  async find(userFilterQuery: FilterQuery<Poll>): Promise<Poll[]> {
    return this.pollModel.find(userFilterQuery);
  }

  async create(poll: Poll): Promise<Poll> {
    const newPoll = new this.pollModel(poll);
    return newPoll.save();
  }

  async findOneAndUpdate(userFilterQuery: FilterQuery<Poll>, poll: Partial<Poll>): Promise<Poll> {
    return this.pollModel.findOneAndUpdate(
      userFilterQuery,
      poll,
      { new: true }
    );
  }

  async deleteOne(userFilterQuery: FilterQuery<Poll>): Promise<Poll> {
    return this.pollModel.findOneAndDelete(userFilterQuery);
  }
}