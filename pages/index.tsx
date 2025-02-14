import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Product from "./_product";
import { products } from "@/modals";
import SwiperComponent from "@/components/swiperComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-gray-100 p-20 w-full min-h-screen">
      <div className="flex justify-between ">
        <h1 className="text-3xl">محصولات</h1>

        <p>مشاهده همه </p>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {/* <SwiperComponent /> */}
        {products.map((item) => {
          return <Product item={item} />;
        })}
      </div>
    </div>
  );
}
