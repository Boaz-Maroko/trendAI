import { JwtService as NestJwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
export declare class JwtService {
    private readonly jwtService;
    constructor(jwtService: NestJwtService);
    generateToken(payload: JwtPayload): string;
    validateToken(token: string): any;
    decodeToken(token: string): JwtPayload | null;
}
