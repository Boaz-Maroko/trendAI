// influencers/schemas/influencers.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Campaign } from '../../campaigns/schemas/campaigns.schema';

@Schema()
export class Influencer extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  joined_date: Date;

  @Prop()
  profile_link: string;

  @Prop([{ type: String, ref: 'Campaign' }]) // Array of campaign IDs that the influencer has joined
  campaigns: string[];
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);
