import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Submission } from './schemas/submissions.schema';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectModel(Submission.name) private submissionModel: Model<Submission>,
  ) {}

  async createSubmission(data: Partial<Submission>): Promise<Submission> {
    const submission = new this.submissionModel(data);
    return submission.save();
  }
  
  async fetchAllSubmissions(): Promise<Submission[]> {
    return this.submissionModel.find().exec();
  }

  async fetchSubmissionsByCampaign(campaignId: string): Promise<Submission[]> {
    return this.submissionModel.find({ campaign_id: campaignId }).exec();
  }

  async updateSubmissionStatus(
    id: string,
    status: string,
  ): Promise<Submission> {
    const validStatuses = ['approved', 'rejected', 'pending'];
    if (!validStatuses.includes(status)) {
      throw new Error(`Invalid status: ${status}. Allowed values are ${validStatuses.join(', ')}`);
    }

    const submission = await this.submissionModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }, // Returns the updated document
    );

    if (!submission) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }

    return submission;
  }
}
