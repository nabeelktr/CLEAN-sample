

import { Product } from "../../entities/product";
import { IProductRepository } from "../../interfaces/iProductRepository";
import { ProductModel } from "../schemas/productSchema";

export class ProductRepository implements IProductRepository{


    async create({name,description,price, stock}: Product): Promise<Product> {
        const product = new ProductModel({ name, description, price, stock })
            await product.save();
          return product.toObject();
    }

    async update(id: number, stock: number): Promise<any> {
        const product = await ProductModel.findByIdAndUpdate(id, { stock }, { new: true });
        return product ? product.toObject() : null;
    }

    async find(limit: number, offset: number): Promise<Product[]> {
        const products = await ProductModel.find().skip(offset).limit(limit);
        return products;
    }
    
}