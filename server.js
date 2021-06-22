const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// express app
const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://Aditya:Aditya1234@blog-website.pu6ze.mongodb.net/blogs-lists?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Aditya finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Rinkal finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create A New Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});
