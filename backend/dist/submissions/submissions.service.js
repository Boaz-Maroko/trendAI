"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const submissions_schema_1 = require("./schemas/submissions.schema");
const common_2 = require("@nestjs/common");
let SubmissionsService = class SubmissionsService {
    constructor(submissionModel) {
        this.submissionModel = submissionModel;
    }
    async createSubmission(data) {
        const submission = new this.submissionModel(data);
        return submission.save();
    }
    async fetchAllSubmissions() {
        return this.submissionModel.find().exec();
    }
    async fetchSubmissionsByCampaign(campaignId) {
        return this.submissionModel.find({ campaign_id: campaignId }).exec();
    }
    async updateSubmissionStatus(id, status) {
        const validStatuses = ['approved', 'rejected', 'pending'];
        if (!validStatuses.includes(status)) {
            throw new Error(`Invalid status: ${status}. Allowed values are ${validStatuses.join(', ')}`);
        }
        const submission = await this.submissionModel.findByIdAndUpdate(id, { status }, { new: true });
        if (!submission) {
            throw new common_2.NotFoundException(`Submission with ID ${id} not found`);
        }
        return submission;
    }
};
exports.SubmissionsService = SubmissionsService;
exports.SubmissionsService = SubmissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(submissions_schema_1.Submission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubmissionsService);
//# sourceMappingURL=submissions.service.js.map