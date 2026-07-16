"use client"

import BreadCrumbs from "@/components/BreadCrumbs"

const FinancialSimulator = () => {

    const breadCrumbsItems = [
        { label: "Apresentação", url: "/" },
        { label: "Dicas Financeiras", url: "/financial-education" },
        { label: "Simulador Financeiro", url: "/" },
    ]

    return (
        <main className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-[url(/fundo3.png)] bg-cover bg-center" />
            <header className="absolute top-16 text-[#f8fafc] font-extrabold text-4xl flex items-center justify-center w-full">

                <BreadCrumbs items={breadCrumbsItems} />
                Simulador Financeiro
            </header>

        </main>
    )
}

export default FinancialSimulator