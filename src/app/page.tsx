"use client"

import { Icon } from "@iconify/react";
import { useRouter } from 'next/navigation'

const Home = () => {

  const router = useRouter()

  return (
    <main className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url(/fundo.png)] z-0 bg-cover bg-center" />
      <header className="absolute top-16 text-[#f8fafc] font-extrabold text-4xl">
        Projeto de Extensão I
      </header>
      <section className="bg-white max-w-5xl p-4 rounded-2xl z-10 shadow-lg">
        <p className="text-4xl text-center">
          Objetivo
        </p>
        <p className="text-2xl text-center">
          Desenvolver uma aplicação digital educativa voltada à educação financeira, com o intuito de conscientizar e auxiliar no aprendizado sobre organização financeira pessoal, controle de gastos e planejamento econômico.
        </p>
      </section>
      <div className="absolute bottom-16">
        <button className="bg-green-400 flex items-center gap-2 p-3 rounded-2xl text-xl cursor-pointer hover:bg-green-500 hover:scale-105 duration-300"
          onClick={() => router.push("/financial-education")}>
          Começar
          <Icon icon="ic:round-start" className="mt-0.5" />
        </button>
      </div>
    </main>

  )
}
export default Home