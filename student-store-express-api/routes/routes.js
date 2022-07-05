const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next)=> {
    const products = await store.listProducts();
    res.status(200).json({products});
});

module.exports = router;