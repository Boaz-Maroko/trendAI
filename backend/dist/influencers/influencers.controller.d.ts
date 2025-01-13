import { InfluencersService } from './influencers.service';
import { CreateInfluencerDto } from './create-influencer.dto';
import { JwtService } from '../auth/jwt.service';
export declare class InfluencersController {
    private readonly influencersService;
    private readonly jwtService;
    constructor(influencersService: InfluencersService, jwtService: JwtService);
    createInfluencer(createInfluencerDto: CreateInfluencerDto): Promise<{
        email: string;
        token: string;
    }>;
    getInfluencerIdByEmail(email: string): Promise<{
        id: string;
    }>;
}
