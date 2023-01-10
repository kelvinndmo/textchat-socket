import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { localEncrypt } from 'src/utils/encryption';

@Injectable()
export class ApiServiceService {
  constructor(private httpService: HttpService) {}

  sendTextMessage(data: any): Observable<AxiosResponse<any>> {
    let textChatApiUser = process.env.TEXTCHAT_API_USER;
    let textChatApiPassword = process.env.TEXTCHAT_API_PASSWORD;
    let textChatApiEncryptionKey = process.env.TEXTCHAT_API_KEY;
    let unixTimestamp = new Date().getTime() / 1000;
    let encryptedAuthHeaderString = localEncrypt(
      `${textChatApiUser}:${textChatApiPassword}|${unixTimestamp}`,
      null,
      { secretKey: textChatApiEncryptionKey },
    );

    return this.httpService.post(
      `https://api-an.qa.textchat.ai/api/SMS/AgentMessage`,
      data.messageData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encryptedAuthHeaderString}`,
        },
      },
    );
  }
}
