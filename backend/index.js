const express = require("express");
const mongoDB = require("./db.js");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

mongoDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./Routes/createUser.js"));
app.use("/api", require("./Routes/displayData.js"));
app.use("/api", require("./Routes/OrderData.js"));

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(port, () => {
  console.log(`Server Started at PORT: ${port}`);
});
