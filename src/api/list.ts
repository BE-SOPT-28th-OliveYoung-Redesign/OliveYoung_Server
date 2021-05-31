import express, { Request, Response } from "express";
import Product from "../models/list";
const router = express.Router();

 /**
 * @route GET /product
 * @desc Get all products list
 * @access Public
 */

router.get("/", async(res, req) => {
  try{
    const product = await Product.find()
    res.json(product);
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

router.get("/:rank", async(res,req) =>{
    try{
        const product = await Product.findOne({
            user: req.params.rank,
        });
        if (!product) return res.status(400).json({ msg: "product not found" });
    } catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})