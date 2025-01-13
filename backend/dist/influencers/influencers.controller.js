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
exports.InfluencersController = void 0;
const common_1 = require("@nestjs/common");
const influencers_service_1 = require("./influencers.service");
const create_influencer_dto_1 = require("./create-influencer.dto");
const jwt_service_1 = require("../auth/jwt.service");
let InfluencersController = class InfluencersController {
    constructor(influencersService, jwtService) {
        this.influencersService = influencersService;
        this.jwtService = jwtService;
    }
    async createInfluencer(createInfluencerDto) {
        const { email, name } = createInfluencerDto;
        const newUser = await this.influencersService.createInfluencer(email, name);
        const payload = { email: newUser.email };
        const token = this.jwtService.generateToken(payload);
        return {
            email: newUser.email,
            token: token,
        };
    }
    async getInfluencerIdByEmail(email) {
        const influencerId = await this.influencersService.getInfluencerByEmail(email.toLowerCase());
        if (!influencerId) {
            throw new Error('Influencer not found');
        }
        return { id: influencerId };
    }
};
exports.InfluencersController = InfluencersController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_influencer_dto_1.CreateInfluencerDto]),
    __metadata("design:returntype", Promise)
], InfluencersController.prototype, "createInfluencer", null);
__decorate([
    (0, common_1.Get)('id/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfluencersController.prototype, "getInfluencerIdByEmail", null);
exports.InfluencersController = InfluencersController = __decorate([
    (0, common_1.Controller)('influencers'),
    __metadata("design:paramtypes", [influencers_service_1.InfluencersService,
        jwt_service_1.JwtService])
], InfluencersController);
//# sourceMappingURL=influencers.controller.js.map