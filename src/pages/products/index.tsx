import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { BsCartPlus } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";
import toast, { Toaster } from "react-hot-toast";
export function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const { addItemCart } = useContext(CartContext);

  const notify = () => toast.success("Produto adicionado ao carrinho");

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    getProduct();
  }, [id]);
  function handleAddItem(produto: ProductProps) {
    addItemCart(produto);
    notify();
    return;
  }
  return (
    <div className="w-full max-w-7xl px-4 mx-auto my-16">
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
      <section className="w-full">
        <div className="flex flex-col lg:flex-row">
          <img
            src={product?.cover}
            alt={product?.title}
            className="rounded-lg flex-1 w-full lg:w-0 lg:mb-0 mb-3 object-fill mr-6"
          />
          <div className="flex-1">
            <p className="font-bold text-2xl font-RobotoCondensed mb-6">
              {product?.title}
            </p>
            <p className="font-light text-2xl font-RobotoCondensed mb-6">
              {product?.description}
            </p>
            <div className="flex items-center gap-4">
              <strong className="text-3xl font-RobotoCondensed">
                {product?.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <button
                className="bg-zinc-900 p-2 rounded text-white hover:opacity-70 transition-all ease-in-out duration-500"
                onClick={() => handleAddItem(product)}
              >
                <BsCartPlus size={30} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
