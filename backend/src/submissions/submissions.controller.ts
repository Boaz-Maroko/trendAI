import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { Submission } from './schemas/submissions.schema';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  async submitContent(
    @Body() submissionData: Partial<Submission>,
  ): Promise<Submission> {
    return this.submissionsService.createSubmission(submissionData);
  }

  @Get()
  async fetchAllSubmissions(): Promise<Submission[]> {
    return this.submissionsService.fetchAllSubmissions();
  }

  @Get(':campaignId')
  async fetchSubmissionsByCampaign(
    @Param('campaignId') campaignId: string,
  ): Promise<Submission[]> {
    return this.submissionsService.fetchSubmissionsByCampaign(campaignId);
  }

  @Patch(':id')
  async updateSubmissionStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ): Promise<Submission> {
    return this.submissionsService.updateSubmissionStatus(id, status);
  }
}
