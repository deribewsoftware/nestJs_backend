/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { dataSet } from "src/data";
import { CreateProductDto } from "./dto/createproduct.dto";

@Injectable()
export class ProductService{
  getProduct(){
    return dataSet;
  }
  
  createProduct(product:CreateProductDto){
     dataSet.push(product);
     return product;
  }
}