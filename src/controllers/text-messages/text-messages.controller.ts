import { Controller, Post, Req } from '@nestjs/common';
import { ChatGateway } from 'src/gateways/chat.gateway';

@Controller('new-visitor-message')
export class TextMessagesController {
  constructor(private chatGateway: ChatGateway) {}
  @Post()
  async create(@Req() req) {
    console.log(req.body);
    this.chatGateway.handleTextMessageReceived(req.body);
  }
}
