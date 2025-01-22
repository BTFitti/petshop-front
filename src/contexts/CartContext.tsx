import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";
import toast from 'react-hot-toast'
interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: ProductProps) => void;
    removeItemCart: (product: CartProps) => void;
    total: string;
    clearCart: ()=> void;
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

  const notify = () => toast.success("Compra efetuada com sucesso!")

  function addItemCart(newItem: ProductProps){

    const indexItem = cart.findIndex(item => item.id === newItem.id)
    if(indexItem !== -1){
        let cartList = cart;

        cartList[indexItem].amount = cartList[indexItem].amount + 1;
        cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
        setCart(cartList)
        totalResultCart(cartList)
        return;
    }

    let dados = {
        ...newItem,
        amount: 1,
        total: newItem.price
    }
    setCart(products => [...products, dados])
    totalResultCart([...cart, dados])
  }
  function removeItemCart(product: CartProps){
    const indexItem = cart.findIndex(item=> item.id === product.id)
    if(cart[indexItem]?.amount > 1){
        let cartList = cart;
        cartList[indexItem].amount = cartList[indexItem].amount - 1;

        cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

        setCart(cartList);

        totalResultCart(cartList);
        return;
    }
    const removeItem = cart.filter(item=> item.id !== product.id)
    setCart(removeItem);
    totalResultCart(removeItem)
  }
  function totalResultCart(items: CartProps[]){
    let myCart = items;
    let result = myCart.reduce((acc,obj)=>{return acc + obj.total},0)
    const resultFormated = result.toLocaleString("pt-BR",{style: "currency",currency: "BRL"})
    setTotal(resultFormated)
  }
  function clearCart(){
    if(cart.length > 0){
      setCart([])
      notify()
    }
  }

  return <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart, removeItemCart, total, clearCart}}>{children}</CartContext.Provider>;
}
export default CartProvider;
