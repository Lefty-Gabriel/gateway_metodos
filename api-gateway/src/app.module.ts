import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { GatewayController } from './gateway/gateway.controller';
import { GatewayService } from './gateway/gateway.service';
import { getClientOptions } from './microservice.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICROSERVICE_CLIENT',
        ...getClientOptions(),
      },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class AppModule {}