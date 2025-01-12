import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { InfluencersService } from './influencers.service';
import { InfluencersController } from './influencers.controller';
import { JwtModule } from '../auth/jwt.module';

@Module({
  imports: [DatabaseModule, JwtModule],
  providers: [InfluencersService],
  controllers: [InfluencersController],
})
export class InfluencersModule {}
