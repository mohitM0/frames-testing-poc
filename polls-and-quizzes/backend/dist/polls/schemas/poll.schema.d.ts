import { Document } from 'mongoose';
export type PollDocument = Poll & Document;
export declare class Poll {
    id: string;
    question: string;
    options: string[];
    votes: number[];
}
export declare const PollSchema: import("mongoose").Schema<Poll, import("mongoose").Model<Poll, any, any, any, Document<unknown, any, Poll> & Poll & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Poll, Document<unknown, {}, import("mongoose").FlatRecord<Poll>> & import("mongoose").FlatRecord<Poll> & {
    _id: import("mongoose").Types.ObjectId;
}>;
