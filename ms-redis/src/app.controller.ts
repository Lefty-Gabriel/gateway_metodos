import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('ping')
  handlePing(@Payload() data: any) {
    console.log('Received ping:', data);
    return `pong`;
  }
}
