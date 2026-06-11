"use client"

import TipsModals from "../../components/TipsModals"

const FinancialEducation = () => {
    return (
        <main className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-[url(/fundo2.png)] z-0 bg-center bg-cover" />
            <header className="absolute top-16 text-[#f8fafc] font-extrabold text-4xl z-10">
                Dicas Financeiras
            </header>
            <TipsModals />
        </main>
    )
}
export default FinancialEducation