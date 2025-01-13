import { Model } from 'mongoose';
import { Campaign } from './schemas/campaigns.schema';
import { Influencer } from '../influencers/schemas/influencers.schema';
export declare class CampaignsService {
    private campaignModel;
    private influencerModel;
    constructor(campaignModel: Model<Campaign>, influencerModel: Model<Influencer>);
    findCampaignById(id: string): Promise<Campaign>;
    findCampaignsByInfluencer(influencerId: string): Promise<Campaign[]>;
    createCampaign(data: Partial<Campaign>): Promise<Campaign>;
    findAllCampaigns(): Promise<Campaign[]>;
}
