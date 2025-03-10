import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { disconnect } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const loginDto: AuthDto = {
	login: 'a3@a.ru',
	password: '3'
}

describe('AuthController (e2e)', () => {
	let app: INestApplication;
	let createdId: string;
	let token: string;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/auth/login (POST) - success', async (done) => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto)
			.expect(200)
			.then(({ body }: request.Response) => {				
				expect(body.access_token).toBeDefined();
				done();
			});
	});	

	it('/auth/login (POST) - fail password', () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, password: '2' })
			.expect(401, {
				statusCode: 401,
				message: "Неправильный пароль",
				error: "Unauthorized"
			});
	});	

	it('/auth/login (POST) - fail login', () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, login: 'aaa@' })
			.expect(401, {
				statusCode: 401,
				message: "Пользователь с таким email не найден",
				error: "Unauthorized"
			});
	});	

	afterAll(() => {
		disconnect();
	});
});