import { Controller, Post, Body } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller('gateway')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post()
  async handleRequest(@Body() payload: any) {
    return this.gatewayService.sendMessage('ping', payload);
  }
}