import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload, Ctx, RmqContext, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('auth-user')
  authUser(@Payload() data: object, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    // console.log(context.getPattern());
    // console.log(originalMsg);
    console.log(channel);
    // console.log(data);


    channel.ack(originalMsg);
    return 'this is the token';
  }

  @EventPattern('reset-email')
  sendResetEmail(@Payload() data: object, @Ctx() context: RmqContext) {
    console.log(data);
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);
  }
}
