import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {
  Campaign,
  CampaignSchema,
} from '../campaigns/schemas/campaigns.schema';
import {
  Submission,
  SubmissionSchema,
} from '../submissions/schemas/submissions.schema';
import {
  Influencer,
  InfluencerSchema,
} from '../influencers/schemas/influencers.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { name: Campaign.name, schema: CampaignSchema },
      { name: Submission.name, schema: SubmissionSchema },
      { name: Influencer.name, schema: InfluencerSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
