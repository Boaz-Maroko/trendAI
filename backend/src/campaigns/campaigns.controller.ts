import { Controller, Get, Param, Post, Body, Req, UnauthorizedException } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './create-campaign.dto';
import { Campaign } from './schemas/campaigns.schema';
import { JwtService } from '../auth/jwt.service'; // Import the JwtService to decode token
import { JwtPayload } from '../auth/jwt-payload.interface'; // Import JwtPayload interface
import { Logger } from '@nestjs/common';


const logger = new Logger('CampaignsController');

@Controller('campaigns')
export class CampaignsController {
  constructor(
    private readonly campaignsService: CampaignsService,
    private readonly jwtService: JwtService, // Inject JwtService
  ) {}

  @Post()
  async create(
    @Body() createCampaignDto: CreateCampaignDto,
  ): Promise<Campaign> {
    return this.campaignsService.createCampaign(createCampaignDto);
  }

    // Endpoint to verify the token and fetch email

  @Get('verify-token')
  async verifyToken(@Req() req): Promise<{ email: string }> {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }
    const decoded = this.jwtService.decodeToken(token);
    logger.log('decoded email', decoded.email)
    return { email: decoded.email };
}


  @Get(':id')
  async findCampaignById(@Param('id') id: string): Promise<Campaign> {
    return this.campaignsService.findCampaignById(id);
  }

  @Get('influencer/:influencerId')
  async findCampaignsByInfluencer(
    @Param('influencerId') influencerId: string,
    @Req() req, // To get the request and token
  ): Promise<Campaign[]> {
    const email = await this.getEmailFromToken(req);
    if (!email) {
      throw new UnauthorizedException('Invalid or expired token');
    }

    return this.campaignsService.findCampaignsByInfluencer(influencerId);
  }

  @Get()
  async findAll(): Promise<Campaign[]> {
    return this.campaignsService.findAllCampaigns();
  }

  // Helper method to get email from the token
  private async getEmailFromToken(req): Promise<string | null> {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header
    
    if (!token) {
      return null; // Return null if no token is provided
    }

    const decoded = this.jwtService.decodeToken(token); // Decode token
    return decoded ? decoded.email : null; // Return email if decoded successfully, else null
  }
}
