import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
export function Header() {
  const { cartAmount } = useContext(CartContext);
  return (
    <header className="w-full bg-orange-400 bg-gradient-to-r from-slate-800 p-1">
      <nav className="max-w-7xl flex items-center justify-between px-5 mx-auto h-24">
        <Link
          to={"/"}
          className="text-7xl font-bold text-white font-RobotoCondensed hover:opacity-60 transition-all duration-500 ease-out"
        >
          PetShop
        </Link>
        <Link to={"/cart"} className="relative">
          <FiShoppingCart size={45} color="#121212" />
          
          {cartAmount > 0 && (
            <span className="absolute -right-3 -top-5 bg-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-white">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
