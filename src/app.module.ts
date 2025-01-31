/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/Database.config';

dotenv.config()

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseConfig,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
