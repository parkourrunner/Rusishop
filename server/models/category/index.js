import mongoose from "mongoose";
const { Schema } = mongoose;

export const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
  },
  { timestamps: true }
);
