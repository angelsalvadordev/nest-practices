import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // para limpiar data que no necesita el body
      forbidNonWhitelisted: true, // para retornar los campos que no son necesarios en el body
    }),
  );

  await app.listen(3000);
}
bootstrap();
