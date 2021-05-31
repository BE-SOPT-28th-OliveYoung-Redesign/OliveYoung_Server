import express, { Request, Response } from "express";
import list from "../models/list";
const router = express.Router();

router.get("/", async(res, req) => {
  try{
    const product = await list.find()
    res.json(product);
  } catch(error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}) 