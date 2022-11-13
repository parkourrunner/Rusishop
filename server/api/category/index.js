import { categoryModel as Category } from "../../models/index.js";
import app from "../../app.js";

app.get("/category", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

app.post("/category/new", async (req, res) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
  });
  await category.save();
  res.json(category);
});

app.delete("/category/delete/:id", async (req, res) => {
  const result = await Category.findByIdAndDelete(req.params.id);
  res.json(`Category ${result.name} with Id=${req.params.id} Removed`);
});

app.put("/category/edit/:id", async (req, res) => {
  try {
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
