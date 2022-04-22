import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AccountController } from '../controllers/accountControllers/account.controller';
import { AdminController } from '../controllers/adminControllers/admin.controller';
import { CatsController } from '../cats/cats.controller';
import { CatsService } from '../cats/cats.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from 'src/cats/cats.module';
import { logger } from 'src/middlewares/logger.middleware';

@Module({
  imports: [ CatsModule ],
  controllers: [AppController, AdminController, AccountController,CatsController],
  providers: [AppService, CatsService],
  
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}
