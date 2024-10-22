export interface TProduct {
    name: string; // Product name
    price: number; // Price of the product
    stockQuantity: number; // Quantity of product available in stock
    category: string; // Category name or ID to which the product belongs
    images: string[]; // Array of image URLs for the product
    brand?: string; // Optional field for the brand of the product
    isFeatured?: boolean; // Optional flag to mark if the product is featured
    ratings?: number; // Average rating for the product
}