import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Men premium Jacket",
    originalPrice: "2000",
    discountedPrice : "1500",
    categoryName: "men",
    rating : "4"
  },
  {
    _id: uuid(),
    name: "Men premium sports TShirt",
    originalPrice: "1500",
    discountedPrice : "1000",
    categoryName: "men",
    rating : "3"
  },
  {
    _id: uuid(),
    name: "Men winter cool Jacket",
    originalPrice: "3000",
    discountedPrice : "2500",
    categoryName: "men",
    rating : "5"
  },
  {
    _id: uuid(),
    name: "Women premium Saree",
    originalPrice: "3000",
    discountedPrice : "2800",
    categoryName: "women",
    rating : "4"
  },
  {
    _id: uuid(),
    name: "Men stylish casual shoes",
    originalPrice: "1000",
    discountedPrice : "700",
    categoryName: "men",
    rating : "2"
  },
  {
    _id: uuid(),
    name: "Women premium shoes",
    originalPrice: "2000",
    discountedPrice : "1500",
    categoryName: "women",
    rating : "4"
  },
  {
    _id: uuid(),
    name: "Men formal Jacket",
    originalPrice: "4000",
    discountedPrice : "3500",
    categoryName: "men",
    rating : "5"
  },
  {
    _id: uuid(),
    name: "Men sports shoes",
    originalPrice: "1000",
    discountedPrice : "500",
    categoryName: "men",
    rating : "1"
  },
  {
    _id: uuid(),
    name: "Women shoes",
    originalPrice: "1000",
    discountedPrice : "500",
    categoryName: "women",
    rating : "1"
  },
  {
    _id: uuid(),
    name: "Men formal pants",
    originalPrice: "3000",
    discountedPrice : "2500",
    categoryName: "men",
    rating : "4"
  },
  {
    _id: uuid(),
    name: " women Jacket",
    originalPrice: "3000",
    discountedPrice : "2000",
    categoryName: "women",
    rating : "3"
  },
  {
    _id: uuid(),
    name: "Men round Tshirt",
    originalPrice: "700",
    discountedPrice : "500",
    categoryName: "men",
    rating : "5"
  },
];
