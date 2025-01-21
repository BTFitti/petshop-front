import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
export function Header() {
  return (
    <header className="w-full bg-orange-400 p-1">
      <nav className="max-w-7xl flex items-center justify-between px-5 mx-auto h-20">
        <Link to={"/"} className="text-5xl font-bold text-purple-900">
          PetShop
        </Link>
        <FiShoppingCart size={35} color="#121212" />
      </nav>
    </header>
  );
}
