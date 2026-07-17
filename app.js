const express = require("express");
const path = require("path");
const engine = require("ejs-mate");

const app = express();

// ===============================
// App Config
// ===============================

const PORT = process.env.PORT || 3000;

// ===============================
// View Engine
// ===============================

app.engine("ejs", engine);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// ===============================
// Middleware
// ===============================

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// ===============================
// Routes
// ===============================

const indexRoutes = require("./routes/index");

app.use("/", indexRoutes);

// ===============================
// 404 Page
// ===============================

app.use((req, res) => {

    res.status(404).send("404 | Page Not Found");

});

// ===============================
// Server
// ===============================

app.listen(PORT, () => {

    console.log(`🚀 Server Running → http://localhost:${PORT}`);

});