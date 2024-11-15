import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class FileUploaderService {
  constructor() {}

  getStorageOptions(customFolder?: string) {
    const folderPath = customFolder
      ? path.join(process.cwd(), customFolder)
      : path.join(
          process.cwd(),
          process.env.UPLOADS_FOLDER || 'uploads',
          new Date().getFullYear().toString(),
          (new Date().getMonth() + 1).toString(),
        );

    // Create the folder if it doesn't exist
    fs.mkdirSync(folderPath, { recursive: true });

    return diskStorage({
      destination: (req, file, cb) => {
        cb(null, folderPath);
      },
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${uuidv4()}${ext}`;
        cb(null, filename);
      },
    });
  }

  singleFileUpload(customFolder?: string) {
    return {
      storage: this.getStorageOptions(customFolder),
      limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB file size limit
    };
  }

  multipleFilesUpload(customFolder?: string) {
    return {
      storage: this.getStorageOptions(customFolder),
      limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB per file
    };
  }
}
