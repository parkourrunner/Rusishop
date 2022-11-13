import { categoryModel as Category } from "../../models/index.js";
import app from "../../app.js";

const __sanetizeProductData = (data) => {
  if (!data.name) {
    return { isSanetized: false, error: "name cannot be empty!" };
  }
  return { isSanetized: true, error: "" };
};

app.get("/category", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

app.post("/category/new", async (req, res) => {
  try {
    const { isSanetized, error } = __sanetizeProductData(req.body);
    if (!isSanetized) {
      throw error;
    }
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
    });
    await category.save();
    res.json(category);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/category/delete/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      throw "id must be provided!";
    }
    const result = await Category.findByIdAndDelete(req.params.id);
    res.json(`Category ${result.name} with Id=${req.params.id} Removed`);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put("/category/edit/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      throw "id must be provided!";
    }

    const { isSanetized, error } = __sanetizeProductData(req.body);
    if (!isSanetized) {
      throw error;
    }

    let categories = await Category.findById(req.params.id);
    if (req.body.name) {
      categories.name = req.body.name;
    }
    if (req.body.description) {
      categories.description = req.body.description;
    }
    await categories.save();
    res.json({ ...categories._doc });
  } catch (error) {
    res.status(400).send(error);
  }
});
