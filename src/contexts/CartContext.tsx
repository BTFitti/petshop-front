import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";
interface CartContextData {
    cart: CartProps[];
}
interface CartProviderProps {
  children: ReactNode;
}
interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

export const CartContext = createContext({} as CartContextData);
function CartProvider({ children }: CartProviderProps) {
    
  const [cart, setCart] = useState<CartProps[]>([]);

  const [total, setTotal] = useState("");

  function addItemCart(newItem: ProductProps){

    const indexItem = cart.findIndex(item => item.id === newItem.id)
    if(indexItem !== -1){
        let cartList = cart;

        cartList[indexItem].amount = cartList[indexItem].amount + 1;
        cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
        setCart(cartList)
        return;
    }


    let dados = {
        ...newItem,
        amount: 1,
        total: newItem.price
    }
    setCart(products => [...products, dados])

  }

  return <CartContext.Provider value={{cart}}>{children}</CartContext.Provider>;
}
export default CartProvider;
