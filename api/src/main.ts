import { MockDeveloperProfilePatchApiResponse } from '@collacode/apispec';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    console.log(MockDeveloperProfilePatchApiResponse);
    await app.listen(3000);

    if (module.hot) {
        console.log('hot!! 12345678');
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
