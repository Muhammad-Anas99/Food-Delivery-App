const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/food-app");
    console.log("Connected!");
    let fetched_data = mongoose.connection.db.collection("food_items");
    const foodCategory = mongoose.connection.db.collection("foodcategory");
    let data = await fetched_data.find({}).toArray();
    let dataa = await foodCategory.find({}).toArray();
    global.food_items = data;
    global.foodcategory = dataa;
    // console.log(global.food_items);
  } catch (error) {
    console.log("err: ", error);
  }
};
module.exports = mongoDB;
