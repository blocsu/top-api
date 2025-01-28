import { Module } from '@nestjs/common';
import { TopPageService } from 'src/top-page/top-page.service';
import { HhService } from './hh.service';

@Module({
  providers: [HhService],
	imports: [TopPageService]
})
export class HhModule {}
