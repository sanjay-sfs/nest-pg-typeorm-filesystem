import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource, typeormConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { FileLoggerModule } from 'services/uploader/file-uploader.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => AppDataSource.options,
    }),
    FileLoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
