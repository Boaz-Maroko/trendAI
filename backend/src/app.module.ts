import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { InfluencersModule } from './influencers/influencers.module';

@Module({
  imports: [
    DatabaseModule,
    CampaignsModule,
    SubmissionsModule,
    InfluencersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
