import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-rose-400 h-14 px-12 flex justify-between items-center">
      <h1 className="font-bold text-3xl">Ecommerce</h1>
      <ul className="flex items-center">
        <li className="mr-5 cursor-pointer">
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li className="mr-5 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-5 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mr-5 cursor-pointer relative">
          <Link to="/wishlist">
            Wishlist
            <AiOutlineHeart title="Your Wishlist" className="text-2xl" />
            <span className="absolute top-[-10px] right-[-10px] bg-white font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
              0
            </span>
          </Link>
        </li>
        <li className="mr-5 cursor-pointer relative">
          <Link to="/login">
            <MdOutlineShoppingCart title="Your Cart" className="text-2xl" />
            <span className="absolute top-[-10px] right-[-10px] bg-white font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
              0
            </span>
          </Link>
        </li>
        <li className="mr-5 cursor-pointer">
          <a href="/login">
            <BsFillPersonFill title="Your Account" className="text-2xl" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
