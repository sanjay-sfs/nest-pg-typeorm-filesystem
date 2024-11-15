import {
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileUploaderService } from 'services/uploader/file-uploader.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private fileUploaderService: FileUploaderService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(
    FilesInterceptor(
      'files',
      10,
      new FileUploaderService().multipleFilesUpload(''),
    ),
  )
  async uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map((file) => ({
      filePath: file.path,
      fileName: file.filename,
    }));
  }
}
