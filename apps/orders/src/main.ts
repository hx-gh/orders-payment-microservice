import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
	const app = await NestFactory.create(OrdersModule);
	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.KAFKA,
		options: {
			client: {
				brokers: ['kafka:29092', 'localhost:9092'],
			},
			consumer: {
				groupId: 'orders-consumer',
			},
		},
	});
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);
	await app.startAllMicroservices();
	await app.listen(3000);
}
bootstrap();
