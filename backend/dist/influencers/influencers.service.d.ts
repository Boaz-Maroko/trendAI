import { Model } from 'mongoose';
import { Influencer } from './schemas/influencer.schema';
export declare class InfluencersService {
    private influencerModel;
    constructor(influencerModel: Model<Influencer>);
    createInfluencer(email: string, name: string): Promise<Influencer>;
    getInfluencerByEmail(email: string): Promise<string | null>;
}
