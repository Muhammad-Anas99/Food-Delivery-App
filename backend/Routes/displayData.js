const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.food_items, global.foodcategory]);
  } catch (error) {
    console.log("ERROR: ", error.message);
  }
});

module.exports = router;
