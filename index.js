const express = require("express");
const compression = require("compression");
const profile = require("response-time");

const app = express();
const port = 8082;

app.use(compression());
app.use(profile());
app.use(express.static("dist"));
app.use(express.static("public"));

app.get("/api/recipes", (req, res) => {
  res.json({
    recipes: [
      { 
        id: 1,
        name: "Waffles",
        description: "Quisque tincidunt blandit nisi, iaculis scelerisque velit accumsan eu. Morbi congue erat eu nunc tincidunt, id semper urna pellentesque.",
        url: "https://loremflickr.com/320/240/cat",
        ingredients: [
          { id: 1, qty: 2 },
          { id: 2, qty: 2 },
          { id: 4, qty: 4 }
        ]
      },
      {
        id: 2,
        name: "Scrambled Eggs",
        description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus imperdiet metus lorem, at congue nunc rutrum",
        url: "https://loremflickr.com/320/240/",
        ingredients: [
          { id: 2, qty: 4 },
          { id: 6, qty: 1 }
        ]
      },
      {
        id: 3,
        name: "Cake",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit mi eu iaculis finibus. Ut vitae rutrum velit. Integer eget odio libero. Nam aliquet nulla vitae sem eleifend, at ultrices turpis mattis. ",
        url: "https://loremflickr.com/320/240/cake",
        ingredients: [
          { id: 1, qty: 2 },
          { id: 2, qty: 2 },
          { id: 3, qty: 6 },
          { id: 4, qty: 4 },
          { id: 5, qty: 1 },
          { id: 7, qty: 1 }
        ]
      },
      {
        id: 4,
        name: "Egg Sandwich",
        description: "Praesent ut vehicula purus. Donec et imperdiet leo. Phasellus tristique a diam non cursus. Aenean ac ullamcorper velit. Nulla auctor posuere leo. ",
        url: "https://loremflickr.com/320/240/dog",
        ingredients: [
          { id: 1, qty: 1 },
          { id: 2, qty: 1 },
          { id: 3, qty: 4 },
          { id: 4, qty: 1 }
        ]
      }
    ]
  });
});

app.get("/api/ingredients", (req, res) => {
  res.json({
    ingredients: [
      { id: 1, name: "Milk"  },
      { id: 2, name: "Egg"   },
      { id: 3, name: "Flour" },
      { id: 4, name: "Sugar" },
      { id: 5, name: "Baking Powder" },
      { id: 6, name: "Salt"  },
      { id: 7, name: "Smör" }
    ]
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log("");
  console.log("Listening to port " + port);
  console.log("Ctrl-c to stop");
  console.log("");
});
