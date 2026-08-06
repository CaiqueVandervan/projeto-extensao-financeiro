"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'

const TipsModals = () => {

    const [animation, setAnimation] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [selectetTip, setSelectetTip] = useState<string>()

    const router = useRouter()

    const handleOpenModal = (tip: string) => {
        setOpenModal(true)
        setSelectetTip(tip)

        requestAnimationFrame(() => {
            setAnimation(true)
        })
    }

    const handleCloseModal = () => {
        setAnimation(false)

        setTimeout(() => {
            setOpenModal(false)
            setSelectetTip(undefined)
        }, 200)
    }

    const sectionClass = "bg-white p-4 w-56 h-48 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-103 duration-100"
    const rowClass = "flex items-center gap-4"
    const paragraphClass = "text-center text-[18px]"
    const contentClass = "grid gap-3"
    const modalh2Class = "text-3xl font-bold"
    const modalParagraphs = "flex flex-col gap-2 text-[18px]"

    return (
        <main className="grid grid-rows-3 gap-4 z-10">
            <div className={rowClass}>
                <section className={sectionClass}
                    onClick={() => handleOpenModal("importância")}>
                    <p className={paragraphClass}>Importância da Educação Financeira</p>
                </section>

                <section className={sectionClass}
                    onClick={() => handleOpenModal("benefícios")}>
                    <p className={paragraphClass}>Benefícios do Controle Financeiro</p>
                </section>

                <section className={sectionClass}
                    onClick={() => handleOpenModal("economizar")}>
                    <p className={paragraphClass}>Economizar Dinheiro</p>
                </section>
            </div>

            <div className={rowClass}>
                <section className={sectionClass}
                    onClick={() => handleOpenModal("dívidas")}>
                    <p className={paragraphClass}>Evitar Dívidas</p>
                </section>

                <section className={sectionClass}
                    onClick={() => handleOpenModal("cartão")}>
                    <p className={paragraphClass}>Uso Consciente do Cartão de Crédito</p>
                </section>

                <section className={sectionClass}
                    onClick={() => handleOpenModal("reserva")}>
                    <p className={paragraphClass}>Importância da Reserva de Emergência</p>
                </section>
            </div>

            <div className={rowClass}>
                <section className={sectionClass}
                    onClick={() => handleOpenModal("render")}>
                    <p className={paragraphClass}>Faça seu Dinheiro Parado Render</p>
                </section>

                <section className={sectionClass}
                    onClick={() => handleOpenModal("investimento")}>
                    <p className={paragraphClass}>Dica de Investimento</p>
                </section>

                <section className="bg-[#16a34a] hover:bg-[#22C55E] p-4 w-40 h-32 rounded-2xl flex items-center justify-center cursor-pointer mx-auto hover:scale-103 duration-100"
                    onClick={() => router.push("/financial-simulator")}>
                    <p className={paragraphClass}>Simulador Financeiro</p>
                </section>
            </div>

            {openModal &&
                (
                    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${animation ? "opacity-100" : "opacity-0"}`}
                        onClick={handleCloseModal}>
                        <div className={`rounded-xl bg-[#242b28] p-6 text-white shadow-xl max-w-2xl w-[90%] transition-all duration-400${animation ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"}`}
                            onClick={(e) => e.stopPropagation()}>

                            {selectetTip === "importância" && (
                                <div className={contentClass}>
                                    <h2 className={modalh2Class}>
                                        Importância da Educação Financeira
                                    </h2>
                                    <div className={modalParagraphs}>
                                        <p>A educação financeira é fundamental para desenvolver uma relação mais saudável com o dinheiro.</p>

                                        <p>Ela ajuda as pessoas a entenderem como administrar ganhos, controlar gastos e planejar o futuro com mais segurança.</p>

                                        <p>Ter conhecimento financeiro permite tomar decisões mais conscientes, evitar problemas financeiros e conquistar pessoais com mais tranquilidade.</p>
                                    </div>
                                </div>
                            )}

                            {selectetTip === "benefícios" && (
                                <div className={contentClass}>
                                    <h2 className={modalh2Class}>
                                        Benefícios do Controle Financeiro
                                    </h2>
                                    <div className={modalParagraphs}>
                                        <p>O controle financeiro ajuda a organizar melhor a vida financeira e entender para onde o dinheiro está sendo direcionado.</p>

                                        <p> Ao acompanhar receitas e despesas, torna-se mais fácil evitar desperdícios, economizar e manter equilíbrio no orçamento.</p>

                                        <p> Além disso, o controle financeiro contribui para alcançar metas e proporciona maior segurança em situações inesperadas.</p>
                                    </div>
                                </div>
                            )}

                            {selectetTip === "economizar" && (
                                <div className={contentClass}>
                                    <h2 className={modalh2Class}>
                                        Economizar Dinheiro
                                    </h2>
                                    <div className={modalParagraphs}>
                                        <p>Economizar dinheiro é um hábito importante para garantir estabilidade financeira e realizar objetivos futuros.</p>

                                        <p>Pequenas atitudes, como evitar compras por impulso, pesquisar preços e planejar os gastos mensais, podem fazer grande diferença ao longo do tempo.</p>

                                        <p>Criar o hábito de guardar parte da renda mensal também ajuda na construção de uma vida financeira mais saudável.</p>
                                    </div>
                                </div>
                            )}

                            {selectetTip === "dívidas" && (
                                <div className={contentClass}>
                                    <h2 className={modalh2Class}>
                                        Evitar Dívidas
                                    </h2>
                                    <div className={modalParagraphs}>
                                        <p>Evitar dívidas é essencial para manter a estabilidade financeira e reduzir preocupações no dia a dia.</p>

                                        <p> Gastar mais do que se ganha, utilizar crédito sem planejamento e acumular parcelas podem gerar dificuldades financeiras no futuro.</p>

                                        <p>Por isso, é importante planejar compras, controlar gastos e utilizar o crédito de forma consciente.</p>
                                    </div>
                                </div>
                            )}

                            {selectetTip === "cartão" && (
                                <div className={contentClass}>
                                    <h2 className={modalh2Class}>
                                        Uso Consciente do Cartão de Crédito
                                    </h2>
                                    <div className={modalParagraphs}>
                                        <p>O cartão de crédito pode ser uma ferramenta útil quando utilizado com responsabilidade.</p>

                                        <p>Porém, o uso excessivo e o parcelamento sem controle podem causar endividamento e juros elevados. </p>

                                        <p>Por isso, é importante acompanhar os gastos, evitar compras desnecessárias e sempre buscar pagar a fatura completa dentro do prazo.</p>
                                    </div>
                                </div>
                            )}

                            {selectetTip === "reserva" && (
                                <div className={contentClass}>
                                    <h2 className={modalh2Class}>
                                        Importância da Reserva de Emergência
                                    </h2>
                                    <div className={modalParagraphs}>
                                        <p>A reserva de emergência é um valor guardado para lidar com situações inesperadas e coisas que precisam de uma certa atenção de imediato, como problemas de saúde, desemprego ou despesas urgentes, como quebrar o carro ou geladeira.</p>

                                        <p> Ter essa reserva proporciona maior segurança financeira e evita a necessidade de recorrer a empréstimos ou dívidas em momentos difíceis.</p>

                                        <p> Mesmo começando com pequenos valores, criar esse hábito faz grande diferença no futuro.</p>
                                    </div>
                                </div>
                            )}

                            {selectetTip === "render" && (
                                <div className={contentClass}>
                                    <h2 className={modalh2Class}>
                                        Faça seu Dinheiro Parado Render
                                    </h2>
                                    <div className={modalParagraphs}>
                                        <p>Ter dinheiro parado significa deixar o dinheiro sem trabalhar, como apenas na conta corrente ou guardado sem rendimento. Com o tempo, isso faz com que ele perca valor por causa da inflação.</p>

                                        <p>Fazer o dinheiro render significa colocá-lo em opções que geram algum tipo de retorno, como investimentos e produtos financeiros. Mesmo valores pequenos podem crescer com o tempo quando aplicados corretamente.</p>

                                        <p>O mais importante não é apenas ganhar mais dinheiro, mas aprender a usar melhor o que já se tem, fazendo escolhas financeiras mais inteligentes e fazendo o dinheiro trabalhar para você.</p>
                                    </div>
                                </div>
                            )}

                            {selectetTip === "investimento" && (
                                <div className={contentClass}>
                                    <h2 className={modalh2Class}>
                                        Dica de Investimento
                                    </h2>
                                    <div className={modalParagraphs}>
                                        <p>A poupança, apesar de ser muito utilizada, não é a opção mais eficiente para quem busca fazer o dinheiro crescer, pois possui rendimentos baixos. O ideal é buscar alternativas com melhor rentabilidade, como investimentos de renda fixa, por exemplo o CDB, que pode oferecer retornos mais interessantes dependendo da instituição e do prazo.</p>

                                        <p>Uma estratégia importante para quem deseja aumentar o patrimônio é manter organização financeira ao longo do mês, utilizando o cartão de crédito de forma consciente para concentrar os gastos. Ao receber o salário, a pessoa pode quitar todas as despesas e, com o valor que sobrar, direcionar uma parte para investimentos.</p>

                                        <p>Dessa forma, o dinheiro não fica parado, mas passa a trabalhar continuamente, ajudando no crescimento gradual do patrimônio ao longo do tempo.</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>)}

        </main>
    )
}
export default TipsModals