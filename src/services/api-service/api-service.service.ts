import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiServiceService {
  constructor(private httpService: HttpService) {}

  sendTextMessage(messageData: any): Observable<AxiosResponse<any>> {
    return this.httpService.post(
      `https://api-an.qa.textchat.ai/api/SMS/AgentMessage`,
      messageData,
    );
  }
}
