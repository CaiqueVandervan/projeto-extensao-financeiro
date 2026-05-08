"use client"

import { Button, TextField } from "@mui/material"

const FinancialSimulator = () => {

    return (
        <main className="h-screen w-full flex items-center justify-center">


            <section className="flex gap-8 bg-white p-3 rounded-2xl">
                <div className="grid gap-3">
                    <TextField label="Sua Renda"/>
                   
                
                <TextField label="Gastos Fixos"/>
                    
                
                <TextField label="Gastos Variados"/>

                <Button>
Simular
                </Button>
                    
                </div>
                <div>
                    askdjmn
                </div>
                
            
            </section>

        </main>
    )
}

export default FinancialSimulator