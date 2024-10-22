import { z } from "zod";

const createProductValidation = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Product name is required',
            invalid_type_error: 'Product name must be a string',
        }),
        brand: z.string({
            required_error: 'Brand name is required',
            invalid_type_error: 'Brand name must be a string',
        }),
        price: z.number({
            required_error: 'Price is required',
            invalid_type_error: 'Price must be a number',
        }).positive('Price must be a positive number'),
        category: z.string({
            required_error: 'Category is required',
            invalid_type_error: 'Category must be a string',
        }),
        stockQuantity: z.number({
            required_error: 'Stock quantity is required',
            invalid_type_error: 'Stock quantity must be a number',
        }).int().nonnegative('Stock quantity must be a non-negative integer'),
        images: z.array(z.string({
            required_error: 'Image URL must be a string',
            invalid_type_error: 'Invalid image URL format',
        })).nonempty('At least one image is required'),

        isFeatured: z.boolean().optional().default(false),
        ratings: z.number().min(0).max(5).optional(),
    })
});

export const ProductValidation = { createProductValidation };
