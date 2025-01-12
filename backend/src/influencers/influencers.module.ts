import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { InfluencersService } from './influencers.service';

@Module({
  imports: [DatabaseModule],
  providers: [InfluencersService],
})
export class InfluencersModule {}
