const express = require("express");
const router = express.Router();
const Store = require("../models/store");
const { NotFoundError } = require("../utils/errors");
const { storage } = require("../data/storage");

router.get("/", async (req, res, next) => {
    try {
      const products = await Store.listProducts();
      res.status(200).json({ products });
    } catch (err) {
      next(err);
    }
  });
  
  // creates a whole new purchase
  router.post("/", (req, res, next) => {
    try {

      const cart = req.body.shoppingCart;
      const user = req.body.user;
      const newPurchase = Store.createPurchase(cart, user);
      const purchases = storage.get("purchases");
  
      res.status(201).json({ purchase: newPurchase });
      purchases.push(newPurchase).write();
    } catch (err) {
      next(err);
    }
  });
  
  // it goes and fetches a product Id
  router.get("/:productId", async (req, res, next) => {
    try {
      const productId = req.params.productId;
      const product = await Store.fetchProductById(productId);
      if (!product) {
        throw new NotFoundError("Product not found");
      }
      res.status(200).json({ product });
    } catch (err) {
      next(err);
    }
  });


module.exports = router;