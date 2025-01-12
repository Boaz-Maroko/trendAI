import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Influencer } from './schemas/influencer.schema';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class InfluencersService {
  constructor(
    @InjectModel(Influencer.name) private influencerModel: Model<Influencer>,
  ) {}

  async createInfluencer(email: string, name: string): Promise<Influencer> {
    // Check if the email already exists
    const existingInfluencer = await this.influencerModel.findOne({ email });
    if (existingInfluencer) {
      throw new Error('Influencer with this email already exists');
    }

    const influencer = new this.influencerModel({ email, name });
    return influencer.save();
  }

  // New method to fetch influencer ID by email
  async getInfluencerByEmail(email: string): Promise<string | null> {
    const influencer = await this.influencerModel.findOne({ email });
    
    if (!influencer) {
      throw new NotFoundException('Influencer not found');
    }
    console.log(influencer._id.toString())
    return influencer._id.toString()  // Return the influencer's ID
  }
}
