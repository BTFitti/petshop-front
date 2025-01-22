import { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import toast, { Toaster } from "react-hot-toast";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { addItemCart } = useContext(CartContext);
  const notify = () => toast.success("Produto adicionado ao carrinho");

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  function handleAddCartItem(produto: ProductProps) {
    addItemCart(produto);
    notify();
  }

  return (
    <main className="w-full max-w-7xl px-4 mx-auto py-4">
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
      <h1 className="font-bold font-RobotoCondensed text-5xl text-center mt-10 mb-10">
        Produtos em alta 🐾
      </h1>
      <div className="grid grid-col-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((produto) => (
          <section
            className="w-full bg-orange-400/25 rounded-lg p-5 hover:scale-105 transition-all ease-out duration-500 shadow-xl"
            key={produto.id}
          >
            <Link to={`/products/${produto.id}`}>
              <img
                src={produto.cover}
                alt={produto.title}
                className="w-full mb-2 rounded-3xl "
              />
              <p className="font-medium font-RobotoCondensed text-base mt-4 mb-4">
                {produto.title}
              </p>
            </Link>

            <div className="flex gap-3 items-center">
              <strong>
                {produto.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <button
                className="bg-zinc-900 p-1 rounded hover:opacity-70 transition-all ease-in-out duration-500"
                onClick={() => handleAddCartItem(produto)}
              >
                <BsCartPlus size={20} color="#fff" />
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
