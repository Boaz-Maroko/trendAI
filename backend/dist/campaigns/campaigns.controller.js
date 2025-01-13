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
exports.CampaignsController = void 0;
const common_1 = require("@nestjs/common");
const campaigns_service_1 = require("./campaigns.service");
const create_campaign_dto_1 = require("./create-campaign.dto");
const jwt_service_1 = require("../auth/jwt.service");
const common_2 = require("@nestjs/common");
const logger = new common_2.Logger('CampaignsController');
let CampaignsController = class CampaignsController {
    constructor(campaignsService, jwtService) {
        this.campaignsService = campaignsService;
        this.jwtService = jwtService;
    }
    async create(createCampaignDto) {
        return this.campaignsService.createCampaign(createCampaignDto);
    }
    async verifyToken(req) {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            throw new common_1.UnauthorizedException('Token not provided');
        }
        const decoded = this.jwtService.decodeToken(token);
        logger.log('decoded email', decoded.email);
        return { email: decoded.email };
    }
    async findCampaignById(id) {
        return this.campaignsService.findCampaignById(id);
    }
    async findCampaignsByInfluencer(influencerId, req) {
        const email = await this.getEmailFromToken(req);
        if (!email) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
        return this.campaignsService.findCampaignsByInfluencer(influencerId);
    }
    async findAll() {
        return this.campaignsService.findAllCampaigns();
    }
    async getEmailFromToken(req) {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return null;
        }
        const decoded = this.jwtService.decodeToken(token);
        return decoded ? decoded.email : null;
    }
};
exports.CampaignsController = CampaignsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_campaign_dto_1.CreateCampaignDto]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('verify-token'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "verifyToken", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "findCampaignById", null);
__decorate([
    (0, common_1.Get)('influencer/:influencerId'),
    __param(0, (0, common_1.Param)('influencerId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "findCampaignsByInfluencer", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "findAll", null);
exports.CampaignsController = CampaignsController = __decorate([
    (0, common_1.Controller)('campaigns'),
    __metadata("design:paramtypes", [campaigns_service_1.CampaignsService,
        jwt_service_1.JwtService])
], CampaignsController);
//# sourceMappingURL=campaigns.controller.js.map