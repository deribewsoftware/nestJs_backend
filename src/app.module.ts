/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule]
  
})
export class AppModule {}
