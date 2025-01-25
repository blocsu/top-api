import { ConfigService } from '@nestjs/config';
import { ITelegramOptions } from 'src/telegram/telegram.interface';

export const getTelegramConfig = (): ITelegramOptions => {
	const configService = new ConfigService;
	return {
		token: '',
		chatId: ''
	};
};