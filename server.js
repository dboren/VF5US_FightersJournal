const express = require("express");

const sequelize = require("sequelize");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});