const router = require("express").Router();
const { reset } = require("nodemon");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
//these are the 5 most basic routes

// GET /api/categories - find all categories
router.get("/", (req, res) => {
  // be sure to include its associated Products
  console.log("Get route /");
  Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  }).then((categoryData) => res.json(categoryData));
});

// GET /api/categories/id - find one specific category (ID MUST BE SPECIFIED)
router.get("/:id", (req, res) => {
  // associated Product data
  Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  });
});

// POST /api/categories - create a new category
router.post("/", (req, res) => {
  Category.create({ category_name: req.body.category_name })
    .then((CategoryData) => res.json(CategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/categories/id - update a category by its 'id' value
router.put("/:id", (req, res) => {
  console.log(req.params.id);
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((CategoryData) => {
      if (!CategoryData[0]) {
        res.status(404).json({ message: "No Category found with this id" });
        return;
      }
      res.json(CategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DEL /api/categories/id - delete a category by its `id` value
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((CategoryData) => {
      if (!CategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(CategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
