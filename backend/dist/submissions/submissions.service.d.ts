import { Model } from 'mongoose';
import { Submission } from './schemas/submissions.schema';
export declare class SubmissionsService {
    private submissionModel;
    constructor(submissionModel: Model<Submission>);
    createSubmission(data: Partial<Submission>): Promise<Submission>;
    fetchAllSubmissions(): Promise<Submission[]>;
    fetchSubmissionsByCampaign(campaignId: string): Promise<Submission[]>;
    updateSubmissionStatus(id: string, status: string): Promise<Submission>;
}
