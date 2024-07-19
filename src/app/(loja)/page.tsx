'use client'

import Card from "@/components/product/Card"
import PageTemplate from "@/components/template/PageTamplate"
import produtos from '@/data/constants/ProductsFaker'


export default function Home() {
    return (
        <PageTemplate>
            <div className="flex gap-5 justify-center flex-wrap">
                {produtos.map((produto) => (
                    <Card key={produto.id} product={produto} />
                ))}
            </div>
        </PageTemplate>
    )
}