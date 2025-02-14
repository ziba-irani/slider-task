import { AnyNaptrRecord } from "node:dns";
import product from "./public/product.jpg";
import { StaticImageData } from "next/image";
export interface IProducts {
  id: number;
  type: string;
  name: string;
  priceBeforeDis: string;
  priceAfterDis: string;
  disRate: string;
  rate: string;
  image: StaticImageData;
}
export const products: IProducts[] = [
  {
    id: 1,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
  {
    id: 2,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
  {
    id: 3,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
  {
    id: 4,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
  {
    id: 5,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
  {
    id: 6,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
  {
    id: 7,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
  {
    id: 8,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
  {
    id: 9,
    type: "شیشه",
    name: "فلوت دودی",
    priceBeforeDis: "395000",
    priceAfterDis: "295000",
    disRate: "20",
    rate: "4.8",
    image: product,
  },
];
