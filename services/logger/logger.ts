// services/logger/file.logger.ts
import { ConsoleLogger } from '@nestjs/common';
import * as fs from 'fs';
import { LoggerHelper } from './helper.function';

export class FileLogger extends ConsoleLogger {
  private readonly logFolder: string;

  constructor() {
    super();
    this.logFolder = 'logs'; // Initialize the logFolder property
    // create logs folder if it doesn't exist
    fs.mkdirSync(this.logFolder, { recursive: true });
    // give write permission to the logs folder
    fs.chmodSync(this.logFolder, 0o777);
  }

  log(message: string) {
    const loggerHelper = new LoggerHelper();
    const logMessage = loggerHelper.messageTransform(message);
    const logPath = `${this.logFolder}`;
    loggerHelper.logFile(logPath, logMessage);
    super.log(message);
  }

  error(message: string, trace: string) {
    const loggerHelper = new LoggerHelper();
    const logMessage = loggerHelper.messageTransform(message);
    const logPath = `${this.logFolder}`;
    loggerHelper.logFile(logPath, logMessage);
    super.error(message, trace);
  }

  warn(message: string) {
    const loggerHelper = new LoggerHelper();
    const logMessage = loggerHelper.messageTransform(message);
    const logPath = `${this.logFolder}`;
    loggerHelper.logFile(logPath, logMessage);
    super.warn(message);
  }

  debug(message: string) {
    const loggerHelper = new LoggerHelper();
    const logMessage = loggerHelper.messageTransform(message);
    const logPath = `${this.logFolder}`;
    loggerHelper.logFile(logPath, logMessage);
    super.debug(message);
  }

  verbose(message: string) {
    const loggerHelper = new LoggerHelper();
    const logMessage = loggerHelper.messageTransform(message);
    const logPath = `${this.logFolder}`;
    loggerHelper.logFile(logPath, logMessage);
    super.verbose(message);
  }
}
