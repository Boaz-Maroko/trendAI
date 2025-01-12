import { Controller, Post, Body } from '@nestjs/common';
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
}
