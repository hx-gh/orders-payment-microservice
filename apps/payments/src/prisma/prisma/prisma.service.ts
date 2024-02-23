import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '.prisma/client/payments';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	async onModuleInit() {
		await this.$connect();
	}
	async enableShutdownHooks(app: any) {
		this.$on('beforeExit' as never, async () => {
			await app.close();
		});
	}
}
