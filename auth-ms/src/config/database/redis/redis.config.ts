import { ConfigService } from '@nestjs/config';
import { RedisModuleOptions } from '@liaoliaots/nestjs-redis';

export const redisConfig = (
  configService: ConfigService,
): RedisModuleOptions => {
  return {
    errorLog: true,
    config: {
      host: configService.get<string>('REDIS_HOST'),
      port: configService.get<number>('REDIS_PORT'),
      db: configService.get<number>('REDIS_DB'),
      onClientCreated: (client) => {
        console.log(client);
      },
    },
  };
};
