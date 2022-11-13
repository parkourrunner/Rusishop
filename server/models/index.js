import mongoose from "mongoose";
const { model } = mongoose;

import { SchemaProduct } from "./product/index.js";

export const ProductModel = model("product", SchemaProduct);
