import { Document } from 'mongoose';
export declare class Submission extends Document {
    campaign_id: string;
    influencer_id: string;
    submission_link: string;
    submission_date: Date;
    status: string;
}
export declare const SubmissionSchema: import("mongoose").Schema<Submission, import("mongoose").Model<Submission, any, any, any, Document<unknown, any, Submission> & Submission & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Submission, Document<unknown, {}, import("mongoose").FlatRecord<Submission>> & import("mongoose").FlatRecord<Submission> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
