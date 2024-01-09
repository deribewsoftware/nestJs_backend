/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/createproduct.dto";

@Controller("product")
export class ProductController {
  constructor(private productService:ProductService){}
  

  @Get()
  getProduct(){
    return  this.productService.getProduct();
  }

  @Post()
  createProduct(@Body() product:CreateProductDto){
    return this.productService.createProduct(product);

  }
}