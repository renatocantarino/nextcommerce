import { createContext, useEffect, useState } from "react";
import CartItem from "../models/CartItem";
import Product from "../models/Product";
import useLocalStorage from "../hooks/useLocalStorage";


interface CartContextProps {
    itens: CartItem[]
    addHandler: (item: Product) => void
    removeHandler: (item: Product) => void
    totalItens: number
}

const CartContext = createContext<CartContextProps>({} as any)

export function CartProvider(props: any) {

    const [itens, setItens] = useState<CartItem[]>([])
    const { get, set } = useLocalStorage()

    useEffect(() => {
        const carrinho = get('carrinho')
        if (carrinho) {
            setItens(carrinho)
        }
    }, [get])

    function addHandler(product: Product) {
        const index = itens.findIndex((it) => it.product.id === product.id)
        if (index === -1) {
            setItens([...itens, { product, quantity: 1 }])
        }
        else {
            const newItem = [...itens]
            newItem[index].quantity++
            alterarItens(newItem)
        }
    }

    function removeHandler(product: Product) {
        const novosItens = itens
            .map((i) => {
                if (i.product.id === product.id) {
                    i.quantity--
                }
                return i
            })
            .filter((i) => i.quantity > 0)
        alterarItens(novosItens)
    }

    function alterarItens(novosItens: CartItem[]) {
        setItens(novosItens)
        set('carrinho', novosItens)
    }

    return (
        <CartContext.Provider value={{
            itens,
            addHandler,
            removeHandler,
            get totalItens() {
                return itens.reduce((total, item) => total + item.quantity, 0)
            }
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext