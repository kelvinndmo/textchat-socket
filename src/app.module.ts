import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextMessagesController } from './controllers/text-messages/text-messages.controller';
import { ChatServiceService } from './services/chat-service/chat-service.service';
import { ChatGateway } from './gateways/chat.gateway';
import { ApiServiceService } from './services/api-service/api-service.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, TextMessagesController],
  providers: [AppService, ChatServiceService, ChatGateway, ApiServiceService],
})
export class AppModule {}
