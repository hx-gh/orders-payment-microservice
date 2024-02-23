import { IsInt, IsNotEmpty } from 'class-validator';

export class PaymentDto {
    /* Payment DTO Class */
	@IsNotEmpty()
	@IsInt()
	amount: number;
	@IsNotEmpty()
	@IsInt()
	order_id: number;
	@IsNotEmpty()
	@IsInt()
	client_id: number;
}
