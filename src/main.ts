import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FileLogger } from 'services/logger/logger';
import { RequestInterceptor } from 'services/request-logger/request.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(new FileLogger());
  app.useGlobalInterceptors(new RequestInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
