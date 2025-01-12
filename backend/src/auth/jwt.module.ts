import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';

@Module({
  imports: [
    NestJwtModule.register({
      secret: 'password',
      signOptions: { expiresIn: '7d' }, // Token expiration time
    }),
  ],
  providers: [JwtService],
  exports: [JwtService], // Export the service for other modules to use
})
export class JwtModule {}
