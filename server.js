const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

app.use((req, res, next) => {
  console.log("New reqest made:");
  console.log("host: ", req.hostname);
  console.log("Path: ", req.path);
  console.log("Method: ", req.method);
  next();
});

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
