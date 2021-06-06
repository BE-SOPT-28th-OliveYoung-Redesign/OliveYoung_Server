import express, { Request, Response } from "express";
import Product from "../models/list";
const router = express.Router();

 /**
 * @route GET /product
 * @desc Get all products list
 * @access Public
 */

router.get("/", async(req, res) => {
  try{
    console.log("dd")
    const products = await Product.find();
    // const list = await Product.findById(product[0]._id);
   // const response = { list}
    res.json(products);
  } catch(error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
})

 /**
 * @route GET /product/rank
 * @desc Get all friends list
 * @access Public
 */

router.get("/:rank", async(req,res) =>{
    try{
        
        const product = await Product.findOne({
          rank: req.params.rank,
        });
        if (!product) return res.status(400).json({ msg: "product not found" });
        res.json(product);
    } catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;