import { Document } from 'mongoose';
export declare class Campaign extends Document {
    name: string;
    instructions: string;
    deadline: Date;
    status: string;
    influencers: string[];
}
export declare const CampaignSchema: import("mongoose").Schema<Campaign, import("mongoose").Model<Campaign, any, any, any, Document<unknown, any, Campaign> & Campaign & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Campaign, Document<unknown, {}, import("mongoose").FlatRecord<Campaign>> & import("mongoose").FlatRecord<Campaign> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
