const express = require("express");
const bodyParser = require("body-parser");
const stockRoutes = require("./routes/stockRoutes");
const heatMaproutes = require("./routes/heatMapRoutes");
const usersRoutes = require("./routes/usersRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 8888;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
const corsOptions = { credentials: true, origin: "*" };
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello this is the stock API.");
});

app.use(stockRoutes);
app.use(heatMaproutes);
app.use(usersRoutes);
app.use(blogRoutes);

app.get("*", function (req, res) {
  res.status(404).render("errors/404");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
