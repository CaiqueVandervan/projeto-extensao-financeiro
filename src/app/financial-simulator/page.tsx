"use client"

import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const formatBRL = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value)

const parseBRL = (value: string) => {
    const numeric = value.replace(/\D/g, "")
    return Number(numeric) / 100
}

const FinancialSimulator = () => {

    const [income, setIncome] = useState<number>(0)
    const [fixedExpenses, setFixedExpenses] = useState<number>(0)
    const [variableExpenses, setVariableExpenses] = useState<number>(0)

    const [incomeDisplay, setIncomeDisplay] = useState<string>("")
    const [fixedExpansesDisplay, setFixedExpensesDisplay] = useState<string>("")
    const [variableExpensesDisplay, setVariableExpensesDisplay] = useState<string>("")

    const [arrIncome, setArrIncome] = useState<number[]>([])
    const [arrFixedExpenses, setArrFixedExpenses] = useState<number[]>([])
    const [arrVariableExpenses, setArrVariableExpenses] = useState<number[]>([])

    const [openResult, setOpenResult] = useState<boolean>(false)
    const [totalIncome, setTotalIncome] = useState<number>(0)
    const [totalExpanses, setTotalExpanses] = useState<number>(0)
    const [balance, setBalance] = useState<number>(0)

    const handleMoneyChange = (
        value: string,
        setValue: React.Dispatch<React.SetStateAction<number>>,
        setDisplay: React.Dispatch<React.SetStateAction<string>>
    ) => {
        const numeric = parseBRL(value)

        setValue(numeric)

        setDisplay(
            numeric ? formatBRL(numeric) : ""
        )
    }

    const handleAddExpenses = (
        value: number,
        setArr: React.Dispatch<React.SetStateAction<number[]>>,
        clear: () => void
    ) => {
        if (!value) return

        setArr((prev) => [...prev, value])

        clear()
    }

    const handleResult = () => {
        setOpenResult(true)

        const totalIncome = arrIncome.reduce((acc, value) => acc + value, 0)
        setTotalIncome(totalIncome)

        const totalFixedExpenses = arrFixedExpenses.reduce((acc, value) => acc + value, 0)
        const totalVariableExpenses = arrVariableExpenses.reduce((acc, value) => acc + value, 0)

        const totalExpanses = totalFixedExpenses + totalVariableExpenses
        setTotalExpanses(totalExpanses)

        const balance = totalIncome - totalExpanses
        setBalance(balance)
    }

    const handleBackToSimulation = () => {
        setArrIncome([])
        setArrFixedExpenses([])
        setArrVariableExpenses([])
        setOpenResult(false)
    }

    useEffect(() => {
        console.log("income:", arrIncome)
        console.log("fixed:", arrFixedExpenses)
        console.log("variable:", arrVariableExpenses)
    }, [arrFixedExpenses, arrIncome, arrVariableExpenses])

    return (
        <main className="h-screen w-full flex items-center justify-center">
            <header className="absolute top-16 text-[#f8fafc] font-extrabold text-4xl">
                Simulador Financeiro
            </header>
            <section className="flex gap-8 bg-white p-4 rounded-2xl">
                {openResult ? (
                    <div>
                        <div className="grid text-center gap-3">
                            <p>
                                <span className="font-extrabold">Renda Total:</span> {formatBRL(totalIncome)}
                            </p>
                            <p>
                                <span className="font-extrabold">Total de Gastos:</span> {formatBRL(totalExpanses)}
                            </p>
                            <p>
                                <span className="font-extrabold">Quanto Sobrou:</span>
                                {" "}
                                <span className={balance > 0 ? "text-green-400" : "text-rose-500"}>
                                    {formatBRL(balance)}
                                </span>
                            </p>

                            

                            <div className="grid gap-2 text-center">
                                {balance > 0 ? (
                                <span className="text-green-600">Continue assim!</span>
                            ): (
                                <span className="text-red-600">Bora tentar economizar mais!</span>
                            )}
                                <Button sx={{
                                    background: "#16a34a",
                                    '&:hover': { backgroundColor: "#22c55e" },
                                }}
                                    variant="contained"
                                    size="large"
                                    endIcon={<KeyboardArrowLeftIcon />}
                                    onClick={handleBackToSimulation}>
                                    Simular Novamente
                                </Button>
                            </div>
                        </div>
                    </div>


                ) : (
                    <div className="flex flex-col gap-6 items-center">
                        <div className="grid gap-3">
                            <div className="flex gap-2">
                                <TextField label="Renda Mensal"
                                    onChange={(e) => handleMoneyChange(e.target.value, setIncome, setIncomeDisplay)}
                                    value={incomeDisplay}
                                    sx={{
                                        '& input[type=number]::-webkit-inner-spin-button': {
                                            WebkitAppearance: 'none',
                                            margin: 0,
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'black',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'black',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'black',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'black',
                                            },
                                        },
                                    }} />
                                <Button sx={{
                                    background: "#16a34a",
                                    '&:hover': {
                                        backgroundColor: "#22c55e",
                                    },
                                    '&:disabled': {
                                        backgroundColor: "#d1fae5"
                                    },
                                    '&.Mui-disabled svg': {
                                        color: '#94a3b8',
                                    },
                                }}
                                    onClick={() => handleAddExpenses(income, setArrIncome, () => {
                                        setIncome(0)
                                        setIncomeDisplay("")
                                    })}
                                    disabled={!income}>
                                    <AddIcon sx={{ color: "black" }} />
                                </Button>
                            </div>


                            <div className="flex gap-2">
                                <TextField label="Gastos Fixos"
                                    onChange={(e) => handleMoneyChange(e.target.value, setFixedExpenses, setFixedExpensesDisplay)}
                                    value={fixedExpansesDisplay}
                                    sx={{
                                        '& input[type=number]::-webkit-inner-spin-button': {
                                            WebkitAppearance: 'none',
                                            margin: 0,
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'black',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'black',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'black',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'black',
                                            },
                                        },
                                    }} />
                                <Button sx={{
                                    background: "#16a34a",
                                    '&:hover': {
                                        backgroundColor: "#22c55e",
                                    },
                                    '&:disabled': {
                                        backgroundColor: "#d1fae5"
                                    },
                                    '&.Mui-disabled svg': {
                                        color: '#94a3b8',
                                    },
                                }}
                                    onClick={() => handleAddExpenses(fixedExpenses, setArrFixedExpenses, () => {
                                        setFixedExpenses(0)
                                        setFixedExpensesDisplay("")
                                    })}
                                    disabled={!fixedExpenses}>
                                    <AddIcon sx={{ color: "black" }} />
                                </Button>
                            </div>

                            <div className="flex gap-2">
                                <TextField label="Gastos Variados"
                                    onChange={(e) => handleMoneyChange(e.target.value, setVariableExpenses, setVariableExpensesDisplay)}
                                    value={variableExpensesDisplay}
                                    sx={{
                                        '& input[type=number]::-webkit-inner-spin-button': {
                                            WebkitAppearance: 'none',
                                            margin: 0,
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'black',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'black',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                borderColor: 'black',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'black',
                                            },
                                        },
                                    }} />
                                <Button sx={{
                                    background: "#16a34a",
                                    '&:hover': {
                                        backgroundColor: "#22c55e",
                                    },
                                    '&:disabled': {
                                        backgroundColor: "#d1fae5"
                                    },
                                    '&.Mui-disabled svg': {
                                        color: '#94a3b8',
                                    },
                                }}
                                    onClick={() => handleAddExpenses(variableExpenses, setArrVariableExpenses, () => {
                                        setVariableExpenses(0)
                                        setVariableExpensesDisplay("")
                                    })}
                                    disabled={!variableExpenses}>
                                    <AddIcon sx={{ color: "black" }} />
                                </Button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div>
                                {arrIncome.length > 0 && (
                                    <div className="border-2 border-[#22c55e] max-h-48 max-w-40 p-2 rounded-lg grid gap-2 overflow-auto customized-scrollbar">
                                        <span className="font-extrabold">
                                            Renda Mensal:
                                        </span>
                                        {arrIncome.map((inc, index) => (
                                            <span key={index}>
                                                {formatBRL(inc)}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div>
                                {arrFixedExpenses.length > 0 && (
                                    <div className="border-2 border-[#22c55e] max-h-48 max-w-40 p-2 rounded-lg grid gap-2 overflow-auto customized-scrollbar">
                                        <span className="font-extrabold">
                                            Gastos Fixos:
                                        </span>
                                        {arrFixedExpenses.map((inc, index) => (
                                            <span key={index}>
                                                {formatBRL(inc)}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div>
                                {arrVariableExpenses.length > 0 && (
                                    <div className="border-2 border-[#22c55e] max-h-48 max-w-40 p-2 rounded-lg grid gap-2 overflow-auto customized-scrollbar">
                                        <span className="font-extrabold">
                                            Gastos Variados:
                                        </span>
                                        {arrVariableExpenses.map((inc, index) => (
                                            <span key={index}>
                                                {formatBRL(inc)}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<CurrencyExchangeIcon />}
                                disabled={arrIncome.length === 0 || arrFixedExpenses.length === 0 || arrVariableExpenses.length === 0}
                                onClick={handleResult}
                                sx={{
                                    background: "#16a34a",
                                    '&:hover': { backgroundColor: "#22c55e" },
                                    '&:disabled': { backgroundColor: "#d1fae5" },
                                    color: "black",

                                    '& .MuiButton-endIcon svg': {
                                        fontSize: 22,
                                        color: 'black',
                                    },

                                    '&.Mui-disabled .MuiButton-endIcon svg': {
                                        color: '#94a3b8',
                                    },
                                }}
                            >
                                Simular
                            </Button>
                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}

export default FinancialSimulator