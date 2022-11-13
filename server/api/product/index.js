import { productModel as Product } from "../../models/index.js";
import app from "../../app.js";
import { currencyEnum, discountTypeEnum } from "../../models/shared/index.js";

app.get("/product", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/product/new", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    categoryId: req.body.categoryId,
    countInStock: req.body.countInStock,
  });
  await product.save();
  res.json(product);
});

app.delete("/product/delete/:id", async (req, res) => {
  const result = await Product.findByIdAndDelete(req.params.id);
  res.json(`Product ${result.name} with Id=${req.params.id} Removed`);
});

app.put("/product/edit/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (req.body.name) {
      product.name = req.body.name;
    }
    if (req.body.categoryId) {
      if (req.body.categoryId === 0) {
        throw "categoryId can't be zero!";
      }
      product.categoryId = req.body.categoryId;
    }
    if (req.body.countInStock || req.body.countInStock === 0) {
      if (req.body.countInStock < 0) {
        throw "countInStock can't be Negative!";
      }
      product.countInStock = req.body.countInStock;
    }
    if (req.body.price) {
      if (req.body.price.base) {
        if (req.body.price.base < 0) {
          throw "base price can't be Negative!";
        }
        product.price.base = req.body.price.base;
      }
      if (req.body.price.currency) {
        const currencyFound = currencyEnum[req.body.price.currency];
        if (currencyFound) {
          product.price.currency = currencyFound;
        } else {
          throw "currency not supported!";
        }
      }
      if (req.body.price.discount) {
        if (req.body.price.discount < 0) {
          throw "base discount can't be Negative!";
        }
        product.price.discount = req.body.price.discount;
      }
      if (req.body.price.discountType) {
        discountTypeEnum;
        const discountTypeFound = discountTypeEnum[req.body.price.discountType];
        if (discountTypeFound) {
          product.price.discountType = discountTypeFound;
        } else {
          throw "discountType not supported!";
        }
      }
    }
    await product.save();
    res.json({ ...product._doc });
  } catch (error) {
    res.status(400).send(error);
  }
});
