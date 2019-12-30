import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerBaseConfig, DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const options: SwaggerBaseConfig = new DocumentBuilder()
    .setTitle('HotelService')
    .setDescription('HotelService Description')
    .setVersion('1.0')
    .addBearerAuth()
    .setSchemes('https')
    .setContactEmail('asdf@gmail.com')
    .setHost('localhost:3000')
    .setBasePath('')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
