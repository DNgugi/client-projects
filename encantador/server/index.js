require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const pool = require(__dirname + "/config/db.config.js");

const app = express();

const PORT = process.env.PORT || 9000;

const getProducts = (req, res) => {
    pool.query('SELECT * FROM  public.products', (error, products) => {
        if (error) {
            throw error;
        }
        res.status(200).json(products.rows);
    })
}

app.get("/", (req, res) => {
  res.send("Nei hou...Ngo hai Encantador API!");
});

app.get('/products', getProducts);



app.listen(PORT, () => {
  console.log(`Encantador Server is listening on port ${PORT}`);
});
