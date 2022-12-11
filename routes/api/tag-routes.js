const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// GET /api/tags - find all tags
router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

// GET /api/tags/id - find one specific tag by id
router.get("/:id", (req, res) => {
  // be sure to include its associated Product data
});

// POST /api/tags - create a new tag
router.post("/", (req, res) => {});

// PUT /api/tags - update a tag's name by its `id` value
router.put("/:id", (req, res) => {
  //
});

// DELETE /api/tags - delete a specific tag by its 'id' value
router.delete("/:id", (req, res) => {});

module.exports = router;
