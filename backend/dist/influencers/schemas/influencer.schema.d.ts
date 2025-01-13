import { Document } from 'mongoose';
export declare class Influencer extends Document {
    email: string;
    name: string;
}
export declare const InfluencerSchema: import("mongoose").Schema<Influencer, import("mongoose").Model<Influencer, any, any, any, Document<unknown, any, Influencer> & Influencer & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Influencer, Document<unknown, {}, import("mongoose").FlatRecord<Influencer>> & import("mongoose").FlatRecord<Influencer> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
