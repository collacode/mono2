import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);

    if (module.hot) {
        console.log('[HMR] Re-loaded');
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
