import { productModel as Product } from "../../models/index.js";
import app from "../../app.js";
import { currencyEnum, discountTypeEnum } from "../../models/shared/index.js";

const __sanetizeProductData = (data) => {
  if (!data.name) {
    return { isSanetized: false, error: "name cannot be empty!" };
  }
  if (data.categoryIds) {
    if (!Array.isArray(data.categoryIds)) {
      return { isSanetized: false, error: "categoryIds must be an Array!" };
    }
  }
  if (data.countInStock < 0) {
    return { isSanetized: false, error: "countInStock can't be Negative!" };
  }
  if (data.price) {
    if (data.price.base < 0) {
      return { isSanetized: false, error: "base price can't be Negative!" };
    }
    if (data.price.currency) {
      const currencyFound = currencyEnum[data.price.currency];
      if (!currencyFound) {
        return { isSanetized: false, error: "currency not supported!" };
      }
    }
    if (data.price.discount) {
      if (data.price.discount < 0) {
        return {
          isSanetized: false,
          error: "base discount can't be Negative!",
        };
      }
    }
    if (data.price.discountType) {
      const discountTypeFound = discountTypeEnum[data.price.discountType];
      if (!discountTypeFound) {
        return { isSanetized: false, error: "discountType not supported!" };
      }
    }
  }
  return { isSanetized: true, error: "" };
};

app.get("/product", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/product/new", async (req, res) => {
  try {
    const { isSanetized, error } = __sanetizeProductData(req.body);
    if (!isSanetized) {
      throw error;
    }
    const product = new Product({
      name: req.body.name,
      categoryIds: req.body.categoryIds,
      countInStock: req.body.countInStock,
    });
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/product/delete/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      throw "id must be provided!";
    }
    const result = await Product.findByIdAndDelete(req.params.id);
    res.json(`Product ${result.name} with Id=${req.params.id} Removed`);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put("/product/edit/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      throw "id must be provided!";
    }

    const { isSanetized, error } = __sanetizeProductData(req.body);
    if (!isSanetized) {
      throw error;
    }

    let product = await Product.findById(req.params.id);
    if (req.body.name) {
      product.name = req.body.name;
    }
    if (req.body.categoryIds) {
      if (!Array.isArray(req.body.categoryIds)) {
        throw "categoryIds must be an Array!";
      }
      product.categoryIds = req.body.categoryIds;
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
