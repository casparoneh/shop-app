import Link from "next/link";

const ShopBanner = () => {
  return (
    <div className="relative">
      <img src="./shopbanner.png" alt="" className="h-96 w-full brightness-90	" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold">SHOP</h1>

        <div className="flex gap-12 mt-8 text-white font-bold">
          <Link href="">JEANS</Link>
          <Link href="">MEN</Link>
          <Link href="">WOMEN</Link>
          <Link href="">TROUSERS</Link>
          <Link href="">SHOES</Link>
          <Link href="">JACKETS</Link>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
