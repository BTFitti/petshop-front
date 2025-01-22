import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
export function Cart() {
  const { cart, removeItemCart, addItemCart, total, cartAmount } =
    useContext(CartContext);
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-center font-semibold font-RobotoCondensed text-5xl my-8">
        Meu carrinho
      </h1>
      {cart.length === 0 && (
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-RobotoCondensed text-2xl font-light">Seu carrinho está vazio!</h1>
          <Link to={"/"} className="p-5 bg-orange-500/80 rounded-full text-white font-RobotoCondensed text-2xl mt-5 hover:bg-orange-800 transition-all duration-500">Acesse todos os produtos!!</Link>
        </div>
      )}
      {cart.map((item) => (
        <section className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
          <Link to={`/products/${item.id}`}>
            <img src={item.cover} alt={item.title} className="w-32" />
          </Link>

          <strong>
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
          <div className="flex items-center justify-center gap-3">
            <button
              className="bg-slate-600 px-2.5 font-medium rounded text-white"
              onClick={() => removeItemCart(item)}
            >
              -
            </button>
            {item.amount}
            <button
              className="bg-slate-600 px-2.5 font-medium  rounded text-white"
              onClick={() => addItemCart(item)}
            >
              +
            </button>
          </div>
          <strong>
            Subtotal:{" "}
            {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </section>
      ))}
      {cart.length !== 0 && <p className="font-bold my-4">Total: {total}</p>}
    </div>
  );
}
