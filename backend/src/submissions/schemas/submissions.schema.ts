import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Submission extends Document {
  @Prop({ required: true })
  campaign_id: string;

  @Prop({ required: true })
  influencer_id: string;

  @Prop()
  submission_link: string;

  @Prop({ default: Date.now })
  submission_date: Date;

  @Prop({ default: 'pending' }) // Example: 'pending', 'approved', 'rejected'
  status: string;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
