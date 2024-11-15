import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger();
  getHello() {
    this.logger.log('Hello World!');
    return { 'Hello World!': 'Hello World!' };
  }

  postHello() {
    this.logger.log('Hello World!');
    return { 'Hello World!': 'Hello World!' };
  }
}
