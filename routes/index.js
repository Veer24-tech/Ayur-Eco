const express = require("express");

const router = express.Router();

/*
==========================
HOME
==========================
*/

router.get("/", (req, res) => {

    res.render("pages/home");

});

/*
==========================
ABOUT
==========================
*/

router.get("/about", (req, res) => {

    res.render("pages/about");

});

/*
==========================
PROJECTS
==========================
*/

router.get("/projects", (req, res) => {

    res.render("pages/projects");

});

/*
==========================
CONTACT
==========================
*/

router.get("/contact", (req, res) => {

    res.render("pages/contact");

});

module.exports = router;