import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Хамгийн анхны Nestjs туршилт!';
  }
}
