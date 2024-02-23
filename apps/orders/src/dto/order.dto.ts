import { IsNotEmpty, IsInt } from 'class-validator';

export class OrderDto {
	/* Order DTO Class */
	@IsNotEmpty()
	@IsInt()
	client_id: number;
	@IsNotEmpty()
	@IsInt()
	price: number;
}
