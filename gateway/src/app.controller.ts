import { Controller, Get } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { Inject} from "@nestjs/common";
import {Observable} from "rxjs";

@Controller()
export class AppController {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy,) {}

  @Get()
  auth() : Observable<any> {
    const pattern = 'auth-user';
    const payload = {
      email: 'grebenita@gmail.com',
      password:'123456',
    };

    return this.client.send<string>(pattern, payload);
  }

  @Get('event')
  testEvent() {
    const pattern = 'reset-email';
    const payload = {
      email: 'grebenita@gmail.com',
      token: '123456',
    };

    return this.client.emit<any>(pattern, payload);
  }
}
