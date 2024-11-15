import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Observable } from 'rxjs';
import * as fs from 'fs';
import { map } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp();
    const statusCode = request.getResponse().statusCode;
    const method = request.getRequest().method;
    const url = request.getRequest().url;
    const ip = request.getRequest().ip;
    const userAgent = this.DeviceType(request.getRequest());
    const browser = this.BrowserType(request.getRequest());
    const ReqID = randomUUID();

    // today date
    const fileName = `${new Date().toISOString().split('T')[0]}.access.log`;
    const folder = 'logs';
    fs.mkdirSync(folder, { recursive: true });
    const meta = {
      ReqID,
      statusCode,
      method,
      url,
      ip,
      userAgent,
      browser,
      date: new Date().toISOString(),
    };
    fs.appendFile(
      `${folder}/${fileName}`,
      JSON.stringify(meta) + '\n',
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Request logged successfully || Req Id:  ' + ReqID);
        }
      },
    );

    return next.handle().pipe(
      map((data) => ({
        ...data,
        meta,
      })),
    );
  }

  DeviceType(req) {
    const userAgent = req.headers['user-agent'];
    if (userAgent.includes('Android')) {
      return 'Android';
    } else if (userAgent.includes('iPhone')) {
      return 'iPhone';
    } else if (userAgent.includes('iPad')) {
      return 'iPad';
    } else {
      return 'Desktop';
    }
  }

  BrowserType(req) {
    const userAgent = req.headers['user-agent'];
    if (userAgent.includes('Chrome')) {
      return 'Chrome';
    } else if (userAgent.includes('Firefox')) {
      return 'Firefox';
    } else if (userAgent.includes('Safari')) {
      return 'Safari';
    } else {
      return 'Other';
    }
  }
}
