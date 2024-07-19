"use client"

import AreaItemCarrinho from "@/components/cart/AreaItemCarrinho";
import CarrinhoVazio from "@/components/cart/CarrinhoVazio";
import TotalCarrinho from "@/components/cart/TotalCarrinho";
import PageTemplate from "@/components/template/PageTamplate";
import CartContext from "@/data/contexts/CartContext";
import useCart from "@/data/hooks/useCart";
import { useContext } from "react";

export default function CartPage() {
    const { itens, addHandler, removeHandler } = useCart()
    return (
        <PageTemplate className="flex flex-col gap-10">

            {itens.length === 0 ? (
                <CarrinhoVazio />
            ) : (
                <>
                    <div className="flex flex-col gap-5">
                        {itens.map((item) => (
                            <AreaItemCarrinho
                                key={item.product.id}
                                item={item}
                                addHandler={(item) => addHandler(item.product)}
                                removeHandler={(item) => removeHandler(item.product)}
                            />
                        ))}
                    </div>
                    <TotalCarrinho itens={itens} />
                </>
            )}





        </PageTemplate>
    )
}