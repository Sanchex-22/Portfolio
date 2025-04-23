import Product from "../images/product1.jpg";

export type ProductData = {
  id:string,
  title: string;
  description: string;
  price: string;
  stock: string;
  imageUrl: string;
};

export const data: ProductData[] = [
    {
      id: "1",
      title: "Product example 1",
      description: "lorem ipsum dolor sit amet",
      price: "2.00",
      stock: "10",
      imageUrl: Product
    },
    {
      id: "2",
      title: "Product example 2",
      description: "lorem ipsum dolor sit amet",
      price: "3.00",
      stock: "5",
      imageUrl: Product
    },
    {
      id: "3",
      title: "Product example 3",
      description: "lorem ipsum dolor sit amet",
      price: "1.00",
      stock: "10",
      imageUrl: Product
    },
    
  ];