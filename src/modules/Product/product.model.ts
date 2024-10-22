import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
    name: { type: String, required: [true, "Product Name is required"] },
    brand: { type: String, required: [true, "Brand name is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    category: { type: String, required: [true, "Category is required"] },
    stockQuantity: {
        type: Number, required: [true, "stockQuantity is required"]
    },
    images: {
        type: [String], required: [true, "Images is required"]
    },
    isFeatured: { type: Boolean, default: false },
    ratings: { type: Number, default: 0 },
}, {
    timestamps: true
});

// 3. Create a Model.
export const ProductsModel = model<TProduct>('Products', productSchema);