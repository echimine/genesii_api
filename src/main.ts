import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT ?? 3002;
  await app.listen(port);
  console.log(`🚀 App is running on http://localhost:${port}`);
}

bootstrap();
