import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GenericErrorFilter } from './utils/filters/generic-error.filter';
import { ValidationErrorFilter } from './utils/filters/validation-error.filter';
import { NotFoundErrorFilter } from './utils/filters/not-found-error.filter';
import { CustomErrorFilter } from './utils/filters/custom-error.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT;

  const app = await NestFactory.create(AppModule);

  const httpAdapterHost = app.get(HttpAdapterHost);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new GenericErrorFilter(httpAdapterHost));
  app.useGlobalFilters(new ValidationErrorFilter(httpAdapterHost));
  app.useGlobalFilters(new NotFoundErrorFilter(httpAdapterHost));
  app.useGlobalFilters(new CustomErrorFilter(httpAdapterHost));

  await app.listen(PORT || 3000, () =>
    console.log(`service started in PORT:${PORT}`),
  );
}
bootstrap();
