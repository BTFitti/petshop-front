import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export function Cart() {
  const { cart, removeItemCart, addItemCart, total, clearCart } =
    useContext(CartContext);

  function handleCheckout() {
    clearCart();
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-center font-semibold font-RobotoCondensed text-5xl my-8">
        Meu carrinho
      </h1>
      {cart.length === 0 && (
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-RobotoCondensed text-2xl font-light">
            Seu carrinho está vazio!
          </h1>
          <Link
            to={"/"}
            className="p-5 bg-orange-500/80 rounded-full text-white font-RobotoCondensed text-2xl mt-5 hover:bg-orange-800 transition-all duration-500"
          >
            Acesse todos os produtos!!
          </Link>
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
          <div>
            <strong>
              Subtotal:{" "}
              {item.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>
        </section>
      ))}
      <div className="flex items-center justify-between">
        {cart.length !== 0 && <p className="font-bold my-4">Total: {total}</p>}
        {cart.length !== 0 && (
          <button
            className="bg-orange-400 py-1 px-3 rounded-full text-white font-RobotoCondensed text-2xl hover:bg-orange-800 transition-all duration-500"
            onClick={handleCheckout}
          >
            Finalizar compra
          </button>
        )}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                boxShadow: "0px 0px 10px 0px green",
                padding: "16px",
                color: "#121212",
                
              },
            },
          }}
          containerStyle={{
            top: 15,
            left: 15,
            bottom: 15,
            right: 15,
          }}
        />
      </div>
    </div>
  );
}
