import { Module } from '@nestjs/common';
import { AccountController } from '../accountControllers/account.controller';
import { AdminController } from '../adminControllers/admin.controller';
import { CatsController } from '../catControllers/cats.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AdminController, AccountController,CatsController],
  providers: [AppService],
})
export class AppModule {}
