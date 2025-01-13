import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './create-campaign.dto';
import { Campaign } from './schemas/campaigns.schema';
import { JwtService } from '../auth/jwt.service';
export declare class CampaignsController {
    private readonly campaignsService;
    private readonly jwtService;
    constructor(campaignsService: CampaignsService, jwtService: JwtService);
    create(createCampaignDto: CreateCampaignDto): Promise<Campaign>;
    verifyToken(req: any): Promise<{
        email: string;
    }>;
    findCampaignById(id: string): Promise<Campaign>;
    findCampaignsByInfluencer(influencerId: string, req: any): Promise<Campaign[]>;
    findAll(): Promise<Campaign[]>;
    private getEmailFromToken;
}
