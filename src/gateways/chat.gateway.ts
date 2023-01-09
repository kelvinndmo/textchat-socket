import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ApiServiceService } from 'src/services/api-service/api-service.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private apiService: ApiServiceService) {}

  @SubscribeMessage('new-agent-message-sent')
  async handleNewAgentMessageSent(@MessageBody() messageData: any) {
    this.apiService.sendTextMessage(messageData).subscribe((response) => {
      this.server.emit('new-agent-message-sucess', {
        ...response.data,
        sessionToken: messageData.sessionToken,
        messageText: messageData.MessageText,
      });
    });
  }

  handleTextMessageReceived(@MessageBody() messageData: any) {
    this.server.emit('new-visitor-message', messageData);
  }
}
