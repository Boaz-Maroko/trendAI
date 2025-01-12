import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';  // Import the JwtPayload interface

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: NestJwtService) {}

  // This method will generate a JWT token
  generateToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);  // This generates the JWT token
  }

  // This method will validate the token (usually used in guards)
  validateToken(token: string) {
    try {
      return this.jwtService.verify(token);  // This verifies and decodes the token
    } catch (error) {
      console.error('Error validating token:', error);
      throw new Error('Invalid or expired token');
    }
  }

  // This method will decode the token without validating it (used when only decoding is needed)
  decodeToken(token: string): JwtPayload | null {
    try {
      return this.jwtService.decode(token) as JwtPayload;  // Decode without validation
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;  // Return null if decoding fails
    }
  }
}
