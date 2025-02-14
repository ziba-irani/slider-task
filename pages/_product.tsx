import { IProducts } from "@/modals";
import Image from "next/image";
interface IProps {
  item: IProducts;
}
function Product({ item }: IProps) {

  return (
    <div className="col-span-1 h-80 bg-white rounded-md p-2 flex-col items-end justify-center">
      <Image src={item.image} alt={item.name} />
      <p>{item.type}</p>
      <p>{item.name}</p>
      <div className="border-t-2 py-2 flex justify-between">
        <div className="flex-col ">
          <p className="px-5 py-1 bg-red-500 text-white rounded-md">
           { `${item.disRate}%`}
          </p>
          <p className=" text-center">{item.rate}</p>
        </div>
        <div className="flex ">
          <div className="flex-col ">
            <p>{item.priceBeforeDis}</p>
            <p>{item.priceAfterDis}</p>
          </div>
          <p className="rotate-90 px-3">تومان</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
