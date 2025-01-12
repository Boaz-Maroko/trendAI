import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Influencer } from '../../influencers/schemas/influencers.schema';

@Schema()
export class Campaign extends Document {
  @Prop()
  name: string;

  @Prop()
  instructions: string;

  @Prop()
  deadline: Date;

  @Prop()
  status: string;

  @Prop([{ type: String, ref: 'Influencer' }]) // Array of influencer IDs that are part of this campaign
  influencers: string[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
