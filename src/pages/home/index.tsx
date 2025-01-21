import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <main className="w-full max-w-7xl px-4 mx-auto py-4">
      <h1 className="font-bold font-RobotoCondensed text-5xl text-center mt-10 mb-10">
        Produtos em alta 🐾
      </h1>
      <div className="grid grid-col-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((produto) => (
          <section className="w-full" key={produto.id}>
            <Link to={`/products/${produto.id}`}>
              <img
                src={produto.cover}
                alt={produto.title}
                className="w-full  mb-2 hover:scale-110 transition-all ease-out duration-500"
              />
              <p className="font-medium font-RobotoCondensed text-base mt-4">
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
              <button className="bg-zinc-900 p-1 rounded hover:opacity-70 transition-all ease-in-out duration-500">
                <BsCartPlus size={20} color="#fff" />
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
