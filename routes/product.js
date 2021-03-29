const { Router } = require('express');

const db = require("../db/products");

const router = Router();

router.get('/',async(req,res)=>{
  const products = await db.getAllProducts();
  res.status(200).json({ products  });
});
router.post('/',async(req,res)=>{
  const results = await db.createProduct(req.body);
  res.status(201).json({ id: results[0]});
} );


module.exports = router;