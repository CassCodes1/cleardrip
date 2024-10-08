const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/db.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

require("dotenv").config();
const port = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin:
      "https://cleardrip.netlify.app, https://cleardrip.netlify.app/, https://cleardrip.netlify.app/*",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/contact", require("./routes/contactRoutes"));
app.use("/api/v1/subscription", require("./routes/subscriptionRoutes.js"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port: ${port}`));
