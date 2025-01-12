import { IsString, IsArray, IsDate, IsOptional } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  name: string;

  @IsString()
  instructions: string;

  @IsDate()
  deadline: Date;

  @IsString()
  status: string;

  @IsArray()
  @IsOptional()
  influencers?: string[]; // Influencer IDs are optional during creation
}
