import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger();
  getHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }

  postHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }
}
