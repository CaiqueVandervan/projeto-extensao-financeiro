"use client"

import { Box, Modal, Typography } from "@mui/material"
import { useState } from "react"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useRouter } from 'next/navigation'

const TipsModals = () => {

    const [open, setOpen] = useState<boolean>(false)
    const [selectetTip, setSelectetTip] = useState<string>()

    const router = useRouter()

    const handleOpenModal = (tip: string) => {
        setOpen(true)
        setSelectetTip(tip)
    }

    return (
        <main className="grid grid-rows-3 gap-4">
            <div className="flex gap-4">
                <section className="bg-white p-4 w-48 h-40 rounded-2xl flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenModal("importância")}>
                    <p className="text-center">Importância da Educação Financeira</p>
                </section>

                <section className="bg-white p-4 w-48 h-40 rounded-2xl flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenModal("benefícios")}>
                    <p className="text-center">Benefícios do Controle Financeiro</p>
                </section>

                <section className="bg-white p-4 w-48 h-40 rounded-2xl flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenModal("economizar")}>
                    <p className="text-center">Economizar Dinheiro</p>
                </section>
            </div>

            <div className="flex gap-4">
                <section className="bg-white p-4 w-48 h-40 rounded-2xl flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenModal("dívidas")}>
                    <p className="text-center">Evitar Dívidas</p>
                </section>

                <section className="bg-white p-4 w-48 h-40 rounded-2xl flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenModal("cartão")}>
                    <p className="text-center">Uso Consciente do Cartão de Crédito</p>
                </section>

                <section className="bg-white p-4 w-48 h-40 rounded-2xl flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenModal("reserva")}>
                    <p className="text-center">Importância da Reserva de Emergência</p>
                </section>
            </div>

            <div className="flex items-center gap-4">
                <section className="bg-white p-4 w-48 h-40 rounded-2xl flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenModal("render")}>
                    <p className="text-center">Faça seu Dinheiro Parado Render</p>
                </section>

                <section className="bg-white p-4 w-48 h-40 rounded-2xl flex items-center justify-center cursor-pointer"
                    onClick={() => handleOpenModal("investimento")}>
                    <p className="text-center">Dica de Investimento</p>
                </section>

                <section className="bg-[#16a34a] p-4 w-40 h-32 rounded-2xl flex items-center justify-center cursor-pointer mx-auto"
                    onClick={() => router.push("/financial-simulator")}>
                    <p className="text-center">Simulador Financeiro</p>
                    <AttachMoneyIcon />
                </section>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: 550,
                    bgcolor: 'white',
                    p: 4,
                    outline: 'none',
                    borderRadius: 4
                }}>

                    {selectetTip === "importância" && (
                        <div className="grid gap-3">
                            <h2 className="text-2xl font-bold">
                                Importância da Educação Financeira
                            </h2>
                            <p>A educação financeira é fundamental para desenvolver uma relação mais saudável com o dinheiro.</p>

                            <p>Ela ajuda as pessoas a entenderem como administrar ganhos, controlar gastos e planejar o futuro com mais segurança.</p>

                            <p>Ter conhecimento financeiro permite tomar decisões mais conscientes, evitar problemas financeiros e conquistar pessoais com mais tranquilidade.</p>
                        </div>
                    )}

                    {selectetTip === "benefícios" && (
                        <div className="grid gap-3">
                            <h2 className="text-2xl font-bold">
                                Benefícios do Controle Financeiro
                            </h2>
                            <p>O controle financeiro ajuda a organizar melhor a vida financeira e entender para onde o dinheiro está sendo direcionado.</p>

                            <p> Ao acompanhar receitas e despesas, torna-se mais fácil evitar desperdícios, economizar e manter equilíbrio no orçamento.</p>

                            <p> Além disso, o controle financeiro contribui para alcançar metas e proporciona maior segurança em situações inesperadas.</p>
                        </div>
                    )}

                    {selectetTip === "economizar" && (
                        <div className="grid gap-3">
                            <h2 className="text-2xl font-bold">
                                Economizar Dinheiro
                            </h2>
                            <p>Economizar dinheiro é um hábito importante para garantir estabilidade financeira e realizar objetivos futuros.</p>

                            <p>Pequenas atitudes, como evitar compras por impulso, pesquisar preços e planejar os gastos mensais, podem fazer grande diferença ao longo do tempo.</p>

                            <p>Criar o hábito de guardar parte da renda mensal também ajuda na construção de uma vida financeira mais saudável.</p>
                        </div>
                    )}

                    {selectetTip === "dívidas" && (
                        <div className="grid gap-3">
                            <h2 className="text-2xl font-bold">
                                Evitar Dívidas
                            </h2>
                            <p>Evitar dívidas é essencial para manter a estabilidade financeira e reduzir preocupações no dia a dia.</p>

                            <p> Gastar mais do que se ganha, utilizar crédito sem planejamento e acumular parcelas podem gerar dificuldades financeiras no futuro.</p>

                            <p>Por isso, é importante planejar compras, controlar gastos e utilizar o crédito de forma consciente.</p>
                        </div>
                    )}

                    {selectetTip === "cartão" && (
                        <div className="grid gap-3">
                            <h2 className="text-2xl font-bold">
                                Uso Consciente do Cartão de Crédito
                            </h2>
                            <p>O cartão de crédito pode ser uma ferramenta útil quando utilizado com responsabilidade.</p>

                            <p>Porém, o uso excessivo e o parcelamento sem controle podem causar endividamento e juros elevados. </p>

                            <p>Por isso, é importante acompanhar os gastos, evitar compras desnecessárias e sempre buscar pagar a fatura completa dentro do prazo.</p>
                        </div>
                    )}

                    {selectetTip === "reserva" && (
                        <div className="grid gap-3">
                            <h2 className="text-2xl font-bold">
                                Importância da Reserva de Emergência
                            </h2>
                            <p>A reserva de emergência é um valor guardado para lidar com situações inesperadas e coisas que precisam de uma certa atenção de imediato, como problemas de saúde, desemprego ou despesas urgentes, como quebrar o carro ou geladeira.</p>

                            <p> Ter essa reserva proporciona maior segurança financeira e evita a necessidade de recorrer a empréstimos ou dívidas em momentos difíceis.</p>

                            <p> Mesmo começando com pequenos valores, criar esse hábito faz grande diferença no futuro.</p>
                        </div>
                    )}

                    {selectetTip === "render" && (
                        <div className="grid gap-3">
                            <h2 className="text-2xl font-bold">
                                Faça seu Dinheiro Parado Render
                            </h2>
                            <p>Ter dinheiro parado significa deixar o dinheiro sem trabalhar, como apenas na conta corrente ou guardado sem rendimento. Com o tempo, isso faz com que ele perca valor por causa da inflação.</p>

                            <p>Fazer o dinheiro render significa colocá-lo em opções que geram algum tipo de retorno, como investimentos e produtos financeiros. Mesmo valores pequenos podem crescer com o tempo quando aplicados corretamente.</p>

                            <p>O mais importante não é apenas ganhar mais dinheiro, mas aprender a usar melhor o que já se tem, fazendo escolhas financeiras mais inteligentes e fazendo o dinheiro trabalhar para você.</p>
                        </div>
                    )}

                    {selectetTip === "investimento" && (
                        <div className="grid gap-3">
                            <h2 className="text-2xl font-bold">
                                Dica de Investimento
                            </h2>
                            <p>A poupança, apesar de ser muito utilizada, não é a opção mais eficiente para quem busca fazer o dinheiro crescer, pois possui rendimentos baixos. O ideal é buscar alternativas com melhor rentabilidade, como investimentos de renda fixa, por exemplo o CDB, que pode oferecer retornos mais interessantes dependendo da instituição e do prazo.</p>
                            
                            <p>Uma estratégia importante para quem deseja aumentar o patrimônio é manter organização financeira ao longo do mês, utilizando o cartão de crédito de forma consciente para concentrar os gastos. Ao receber o salário, a pessoa pode quitar todas as despesas e, com o valor que sobrar, direcionar uma parte para investimentos.</p>
                            
                            <p>Dessa forma, o dinheiro não fica parado, mas passa a trabalhar continuamente, ajudando no crescimento gradual do patrimônio ao longo do tempo.</p>
                        </div>
                    )}

                </Box>
            </Modal>
        </main>
    )
}
export default TipsModals