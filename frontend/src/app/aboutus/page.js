import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-14 px-4 md:px-0">
      <img src="./shop.webp" alt="" className="w-full h-96 object-cover" />

      <div className="max-w-3xl  mx-auto py-8">
        <h1 className="text-2xl font-bold">OUR STORY</h1>
        <p className="text-sm font-bold py-6 text-gray-600 text-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p className="text-sm text-gray-600 text-justify">
          Saw wherein fruitful good days image them, midst, waters upon, saw.
          Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
          years itself so seed fifth for grass evening fourth shall you're unto
          that. Had. Female replenish for yielding so saw all one to yielding
          grass you'll air sea it, open waters subdue, hath. Brought second
          Made. Be. Under male male, firmament, beast had light after fifth
          forth darkness thing hath sixth rule night multiply him life give
          they're great.
        </p>

        <div className="flex text-left py-8">
          <div>
            <h1 className="text-xl font-bold">Our Mission</h1>
            <p className="text-gray-600 text-sm my-4">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Our Vision</h1>
            <p className="text-gray-600 text-sm my-4">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col md:flex-row">
          <img src="./shop2.jpg" alt="" className="w-full h-80 md:w-1/2" />
          <div className=" md:w-1/2 text-sm text-justify mt-4 md:m-4">
            <h1 className="text-xl font-bold text-left">The Company</h1>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras.
            </p>
          </div>
        </div>

        <div className="flex gap-6 text-center   md:justify-center flex-col py-8 md:flex-row">
          <div className="flex flex-col items-center">
            <MdDeliveryDining size={60} />
            <h1 className="font-semibold text-lg my-4">
              FAST AND FREE DELIVERY
            </h1>
            <p className="text-gray-600 text-sm">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineSupportAgent size={60} />
            <h1 className="font-semibold text-lg my-4">
              24/7 CUSTOMER SUPPORT
            </h1>
            <p className="text-gray-600 text-sm">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="flex flex-col items-center">
            <GiMoneyStack size={60} />
            <h1 className="font-semibold text-lg my-4">MONEY BACK GUARANTEE</h1>
            <p className="text-gray-600 text-sm">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
