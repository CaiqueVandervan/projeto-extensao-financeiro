"use client"

import TipsModals from "../../components/TipsModals"
import BreadCrumbs from "@/components/BreadCrumbs"

const FinancialEducation = () => {

    const breadCrumbsItems = [
        { label: "Apresentação", url: "/" },
        { label: "Dicas Financeiras", url: "/" }
    ]

    return (
        <main className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-[url(/fundo2.png)] z-0 bg-center bg-cover" />
            <header className="absolute top-16 text-[#f8fafc] font-extrabold text-4xl w-full flex items-center justify-center">

                <BreadCrumbs items={breadCrumbsItems} />

                Dicas Financeiras

            </header>
            <TipsModals />
        </main>
    )
}
export default FinancialEducation