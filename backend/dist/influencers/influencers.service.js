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
exports.InfluencersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const influencer_schema_1 = require("./schemas/influencer.schema");
const common_2 = require("@nestjs/common");
let InfluencersService = class InfluencersService {
    constructor(influencerModel) {
        this.influencerModel = influencerModel;
    }
    async createInfluencer(email, name) {
        const existingInfluencer = await this.influencerModel.findOne({ email });
        if (existingInfluencer) {
            throw new Error('Influencer with this email already exists');
        }
        const influencer = new this.influencerModel({ email, name });
        return influencer.save();
    }
    async getInfluencerByEmail(email) {
        const influencer = await this.influencerModel.findOne({ email });
        if (!influencer) {
            throw new common_2.NotFoundException('Influencer not found');
        }
        console.log(influencer._id.toString());
        return influencer._id.toString();
    }
};
exports.InfluencersService = InfluencersService;
exports.InfluencersService = InfluencersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(influencer_schema_1.Influencer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InfluencersService);
//# sourceMappingURL=influencers.service.js.map