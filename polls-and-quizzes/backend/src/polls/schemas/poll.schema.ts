import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PollDocument = Poll & Document;

@Schema()
export class Poll {
  @Prop({ required: true})
  id: string;
  
  @Prop({ required: true})
  question: string;

  @Prop({ type: [String], required: true})
  options: string[];

  @Prop({ type: [Number], default: []})
  votes: number[];
}

export const PollSchema = SchemaFactory.createForClass(Poll);