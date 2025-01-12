import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './create-campaign.dto';
import { Campaign } from './schemas/campaigns.schema';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Post()
  async create(
    @Body() createCampaignDto: CreateCampaignDto,
  ): Promise<Campaign> {
    return this.campaignsService.createCampaign(createCampaignDto);
  }

  @Get(':id')
  async findCampaignById(@Param('id') id: string): Promise<Campaign> {
    return this.campaignsService.findCampaignById(id);
  }

  @Get('influencer/:influencerId')
  async findCampaignsByInfluencer(
    @Param('influencerId') influencerId: string,
  ): Promise<Campaign[]> {
    return this.campaignsService.findCampaignsByInfluencer(influencerId);
  }

  @Get()
  async findAll(): Promise<Campaign[]> {
    return this.campaignsService.findAllCampaigns();
  }
}
