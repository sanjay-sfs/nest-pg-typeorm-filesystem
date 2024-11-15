// Purpose: Helper function for the logger service
import * as fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();
export class LoggerHelper {
  // helper
  constructor() {}

  logFile(path: string, data: any): boolean {
    // logFile helper
    const TZ = process.env.TZ || 'UTC';
    let todayDate: string;
    let time: string;
    try {
      todayDate = new Date().toLocaleDateString('en-CA', { timeZone: TZ });
      time = new Date().toLocaleTimeString('en-GB', {
        timeZone: TZ,
        hour12: false,
      });
    } catch (error) {
      console.error(`Invalid time zone specified: ${TZ}`);
      return false;
    }

    const fileName = `${todayDate}.log`;
    const filePath = `${path}/${fileName}`;
    const message = `${time}: ${this.messageTransform(data)}\n`;

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    fs.appendFile(filePath, message, (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    return true;
  }

  messageTransform(data: any): string {
    // Transform the message data to a string format suitable for printing in a file
    if (typeof data === 'string') {
      return data;
    } else if (typeof data === 'object') {
      return JSON.stringify(data);
    } else {
      return String(data);
    }
  }
}
