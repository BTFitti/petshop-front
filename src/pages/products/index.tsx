import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";
export function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    getProduct();
  }, [id]);
  return (
    <div className="w-full max-w-7xl px-4 mx-auto my-16">
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
              <button className="bg-zinc-900 p-2 rounded text-white">
                <BsCartPlus size={30} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
