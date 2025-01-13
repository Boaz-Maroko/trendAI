import { SubmissionsService } from './submissions.service';
import { Submission } from './schemas/submissions.schema';
export declare class SubmissionsController {
    private readonly submissionsService;
    constructor(submissionsService: SubmissionsService);
    submitContent(submissionData: Partial<Submission>): Promise<Submission>;
    fetchAllSubmissions(): Promise<Submission[]>;
    fetchSubmissionsByCampaign(campaignId: string): Promise<Submission[]>;
    updateSubmissionStatus(id: string, status: string): Promise<Submission>;
}
