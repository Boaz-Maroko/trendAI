// campaigns/campaigns.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from './schemas/campaigns.schema';
import { Influencer } from '../influencers/schemas/influencers.schema';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
    @InjectModel(Influencer.name) private influencerModel: Model<Influencer>,
  ) {}

  // Method to fetch a single campaign by its ID
  async findCampaignById(id: string): Promise<Campaign> {
    return this.campaignModel.findById(id).exec(); // Fetch the campaign using the provided ID
  }

  async findCampaignsByInfluencer(influencerId: string): Promise<Campaign[]> {
    // Find all campaigns where the influencer is part of the campaign
    return this.campaignModel.find({ influencers: influencerId }).exec();
  }

  async createCampaign(data: Partial<Campaign>): Promise<Campaign> {
    const campaign = new this.campaignModel(data);
    return campaign.save();
  }

  async findAllCampaigns(): Promise<Campaign[]> {
    return this.campaignModel.find({}, {_id: 1}).exec();
  }
}
