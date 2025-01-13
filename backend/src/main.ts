import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VercelRequest, VercelResponse } from '@vercel/node';

async function createApp() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend communication
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true, // If using cookies or Authorization headers
  });

  await app.init();
  return app;
}

// Vercel handler function
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const app = await createApp();
  app.getHttpAdapter().getInstance().handle(req, res);
}
