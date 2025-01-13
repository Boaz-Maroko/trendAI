"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluencersModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const influencers_service_1 = require("./influencers.service");
const influencers_controller_1 = require("./influencers.controller");
const jwt_module_1 = require("../auth/jwt.module");
let InfluencersModule = class InfluencersModule {
};
exports.InfluencersModule = InfluencersModule;
exports.InfluencersModule = InfluencersModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, jwt_module_1.JwtModule],
        providers: [influencers_service_1.InfluencersService],
        controllers: [influencers_controller_1.InfluencersController],
    })
], InfluencersModule);
//# sourceMappingURL=influencers.module.js.map