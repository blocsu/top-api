import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

	@Post('registr')
	async registr(@Body() dto: AuthDto) {

	}

	@HttpCode(200)
	@Post('login')
	async login() {

	}
}
