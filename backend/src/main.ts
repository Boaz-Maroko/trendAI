import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable cors
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true, // If using cookies or Authorization headers
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
