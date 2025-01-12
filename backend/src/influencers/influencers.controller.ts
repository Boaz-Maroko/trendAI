import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { InfluencersService } from './influencers.service';
import { CreateInfluencerDto } from './create-influencer.dto';
import { JwtService } from '../auth/jwt.service';  // Import JwtService


@Controller('influencers')
export class InfluencersController {
  constructor(
    private readonly influencersService: InfluencersService,
    private readonly jwtService: JwtService,  // Inject JwtService
  ) {}

  @Post('create')
  async createInfluencer(@Body() createInfluencerDto: CreateInfluencerDto) {
    const { email, name } = createInfluencerDto;

    // Create user using the service
    const newUser = await this.influencersService.createInfluencer(email, name);

    // Generate JWT token for the user
    const payload = { email: newUser.email };  // You can add more fields here if needed
    const token = this.jwtService.generateToken(payload);

    // Return the user data along with the token
    return {
      email: newUser.email,
      token: token,  // Send the JWT token to the client
    };
  }

  // Endpoint to get influencer id by email
  @Get('id/:email')
  async getInfluencerIdByEmail(@Param('email') email: string) {
    // Fetch the influencer by email
    const influencerId = await this.influencersService.getInfluencerByEmail(email.toLowerCase());

    if (!influencerId) {
      throw new Error('Influencer not found');
    }

    return { id: influencerId};  // Return the influencer's id
  }
}
