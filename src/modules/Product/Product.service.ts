import { TProduct } from "./product.interface";
import { ProductsModel } from "./product.model";


// create product into database
const createProduct = async (payload: TProduct) => {
    const { name, price, category, images, stockQuantity, brand, isFeatured, ratings } = payload;
    const Product = await ProductsModel.create({
        name, price, category, images, stockQuantity, brand, isFeatured, ratings
    })
    return Product
}

const getAllProducts = async () => {
    const result = await ProductsModel.find()
    return result
}
export const productService = {
    createProduct,
    getAllProducts
}