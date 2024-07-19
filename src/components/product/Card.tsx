import useCart from "@/data/hooks/useCart";
import Product from "@/data/models/Product";
import Image from 'next/image'

export interface CardProps {
    product: Product
}

export default function Card(props: CardProps) {
    const { addHandler } = useCart()
    const { name, description, price, imagePath } = props.product;


    return (
        <div className="flex flex-col w-72 bg-zinc-900">
            <div className="relative w-72 h-52">
                <Image src={imagePath} alt={name} fill className="object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="flex-1 text-sm text-zinc-400">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold mt-2">R$ {price.toFixed(2)}</span>
                    <button
                        className="border rounded-full px-5 py-1 text-sm"
                        onClick={() => addHandler(props.product)}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )

}