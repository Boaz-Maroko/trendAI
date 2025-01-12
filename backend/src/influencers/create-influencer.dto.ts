import { IsEmail, IsString, Length } from 'class-validator';

export class CreateInfluencerDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(3, 100)
  name: string;
}
