import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto/order.dto';
import { OrderStatus } from '.prisma/client/orders';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get()
	all() {
		return this.ordersService.all();
	}
	@Post()
	create(@Body() data: OrderDto) {
		return this.ordersService.create(data);
	}
	@MessagePattern('payments')
	async complete(@Payload() message) {
		await this.ordersService.complete(
			message.order_id,
			message.status === 'APPROVED'
				? OrderStatus.PAYED
				: OrderStatus.CANCELLED,
		);
	}
}
