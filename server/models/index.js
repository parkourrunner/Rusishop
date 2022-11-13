import mongoose from "mongoose";
const { model } = mongoose;

import { categorySchema } from "./category/index.js";
import { productSchema } from "./product/index.js";

export const productModel = model("Product", productSchema);
export const categoryModel = model("Category", categorySchema);
