import express, { Request, Response } from "express";
import { ProductType } from "../models/product";
const router = express.Router();
const productSchema = require("../models/product");


// Create new product ///////////
router.post("/products", (req: Request, res: Response) => {
  const product = productSchema(req.body);
if(product.price > 999 || product.price < 10){
  return res.send('Please check the price of the new product, it seems to be too low or too high')
}else{
  product
    .save()
    .then((data: Response) => res.json(data))
    .catch((error: Response) => res.json({ message: error }));
}
});

// Get products by color ///////////
router.get("/products/color/:color", (req: Request, res: Response) => {
  const { color } = req.params;
  productSchema
    .find()
    .then((data: ProductType[]) =>
      data.filter(({ colors }) => colors.includes(color))
    )
    .then((prod: Response) => res.json(prod))
    .catch((error: Response) => res.json({ message: error }));
});

// Get product by id ///////////
router.get("/products/id/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  productSchema
    .findOne({ id: id })
    .then((data: Response) => res.json(data))
    .catch((error: Response) => res.json({ message: error }));
});

// Get all products ///////////
router.get("/products", (_req, res: Response) => {
  productSchema
    .find()
    .then((data: Response) => res.json(data))
    .catch((error: Response) => res.json({ message: error }));
});

// Edit a product ///////////
router.put("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;
  productSchema
    .updateOne({ id: id }, { $set: { text } })
    .then((data: Response) => res.json(data))
    .catch((error: Response) => res.json({ message: error }));
});

// Delete a product ///////////
router.delete("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  productSchema
    .remove({ id: id })
    .then((data: Response) => res.json(data))
    .catch((error: Response) => res.json({ message: error }));
});

module.exports = router;
