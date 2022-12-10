const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
//these are the 5 most basic routes

router.get("/", (req, res) => {
  //get all
  // find all categories
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

router.get("/:id", (req, res) => {
  //get one - we need to specify which one, it can't be general
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log(req.params);
  Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post("/", (req, res) => {
  // create a new category
  //Sequelize statements--revisit modules
  console.log(req.body);
  Category.findByPk(req.body).then((categoryData) => {
    res.json(categoryData);
  });
});

router.put("/:id", (req, res) => {
  // create x
  // update a category by its `id` value
  console.log(req.params.id);
  Category.findOne(req.body).then((CategoryData) => {
    res.json(CategoryData);
  });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.findOne(req.params.id).then((CategoryData) => {
    res.json(CategoryData);
  });
});

module.exports = router;
