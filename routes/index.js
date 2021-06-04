var express = require("express");
var app = express();
const { title, link, name } = require("node:process");
const { redirect } = require("statuses");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", {
    title: "Sathi's Profile",
    link: "home",
  });
});

router.get("/home", function (req, res) {
  res.render("index", {
    title: "Sathi's Profile",
    link: "home",
  });
});

/* GET About Us page. */
router.get("/about", function (req, res) {
  res.render("about", {
    title: "About Sathi",
    link: "about",
    name: "Sathi Akter",
  });
});

/* GET Products page. */
router.get("/products", function (req, res) {
  res.render("products", { title: "Created Products", link: "products" });
});

/* GET Projects page. */
router.get("/projects", function (req, res) {
  res.render("projects", { title: "Created Projects", link: "projects" });
});

/* GET Services page. */
router.get("/services", function (req, res) {
  res.render("services", { title: "Provided Services", link: "services" });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res) {
  res.render("contact", { title: "Contact Sathi", link: "contact" });
});

router.post("/contact", function (req, res) {
  console.info(
    `Contact Form:
from:             ${req.body.firstName} ${req.body.lastName} 
email:            ${req.body.email}
tel:              ${req.body.phone}
says:             ${req.body.message}`
  );
  res.redirect("/");
});

module.exports = router;
