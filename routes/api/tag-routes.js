const router = require("express").Router();
const { res } = require("nodemon");
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// GET /api/tags - find all tags
router.get("/", (req, res) => {
  Tag.findAll({
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).then((tagData) => res.json(tagData));
});

// GET /api/tags/id - find one specific tag by id
router.get("/:id", (req, res) => {
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id).then((productTagData) => {
    res.json(productTagData);
  });
});

// POST /api/tags - create a new tag
router.post("/", (req, res) => {
  Tag.create({ tag_name: req.body.tag_name })
    .then((productTagData) => res.json(productTagData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// PUT /api/tags - update a tag's name by its `id` value
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((TagData) => {
      if (!TagData[0]) {
        res.status(404).json({ message: "No Tag found with this id" });
        return;
      }
      res.json(TagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// DELETE /api/tags - delete a specific tag by its 'id' value
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((TagData) => {
      if (!TagData) {
        res.status(404).json({ message: "No Tag found with this id" });
        return;
      }
      res.json(TagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
