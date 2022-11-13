import mongoose from "mongoose";
const { Schema } = mongoose;
import { currencyEnum, discountTypeEnum } from "../shared/index.js";

export const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      base: {
        type: Schema.Types.Number,
        default: null,
      },
      currency: {
        type: Schema.Types.Number,
        default: currencyEnum.IRR,
      },
      discount: {
        type: Schema.Types.Number,
        default: 0,
      },
      discountType: {
        type: Schema.Types.Number,
        default: discountTypeEnum.Percentage,
      },
    },
    categoryIds: [
      {
        type: Number,
      },
    ],
    countInStock: { type: Number, default: 0, required: true },
    description: { type: String },
  },
  { timestamps: true }
);
