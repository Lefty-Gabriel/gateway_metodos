// src/microservice.options.ts
import { Transport, ClientOptions } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();

export function getClientOptions(): ClientOptions {
  const transport = process.env.TRANSPORT;

  switch (transport) {
    case 'TCP':
      return {
        transport: Transport.TCP,
        options: {
          host: process.env.TCP_HOST,
          port: Number(process.env.TCP_PORT),
        },
      };
    case 'redis':
      return {
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_HOST,
          port: Number(process.env.REDIS_PORT),
        },
      };
    case 'nats':
      return {
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_URL!],
        },
      };
    default:
      throw new Error(`Transport ${transport} no soportado`);
  }
}
