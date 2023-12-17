import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black py-14 text-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">LOGO</h1>
            <p className="max-w-xs my-4">
              14123 Deshmoret e Kombit,CE 10000, Prishtine
            </p>
            <p className="font-bold text-sm">saleapp@gmail.com</p>
            <p className="font-bold text-sm">+123 123 1233</p>

            <div color="white" className="flex gap-4 my-4">
              <FaFacebookF size={20} />
              <IoLogoInstagram size={20} />
              <IoLogoYoutube size={20} />
              <FaXTwitter size={20} />
            </div>
          </div>
          <div className="md:justify-self-center">
            <h1 className="font-bold text-2xl">Navigation</h1>

            <div className="flex flex-col gap-4 mt-4">
              <Link href="/" className="text-lg">
                Home
              </Link>
              <Link href="/blog" className="text-lg">
                Blog
              </Link>
            </div>
          </div>
          <div className="space-y-4 md:justify-self-center">
            <h1 className="font-bold text-2xl">SHOP</h1>

            <div className="flex flex-col gap-4 mt-4">
              <Link href="/" className="text-lg">
                New Arrivals
              </Link>
              <Link href="/blog" className="text-lg">
                Men
              </Link>
              <Link href="/blog" className="text-lg">
                Women
              </Link>
              <Link href="/blog" className="text-lg">
                Shop All
              </Link>
            </div>
          </div>
          <div className=" md:justify-self-end">
            <h1 className="font-bold text-2xl">Company</h1>

            <div className="flex flex-col gap-4 mt-4">
              <Link href="/contact" className="text-lg">
                Contact
              </Link>
              <Link href="/blog" className="text-lg">
                About
              </Link>
              <Link href="/faq" className="text-lg">
                QA
              </Link>
              <Link href="/termsandconditions" className="text-lg">
                Terms and Conditions
              </Link>
              <Link href="/privacypolicy" className="text-lg">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
