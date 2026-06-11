"use client"

import { Button, Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation'

const Home = () => {

  const router = useRouter()

  return (
    <main className="relative h-screen flex items-center justify-center">
      <header className="absolute top-16 text-[#f8fafc] font-extrabold text-4xl">
        Projeto de Extensão I
      </header>
      <section className="bg-white max-w-5xl p-4 rounded-2xl">
        <p className="text-xl font-medium text-center">
          Objetivo
        </p>
        <p className="text-xl text-center">
          Desenvolver uma aplicação digital educativa voltada à educação financeira, com o intuito de conscientizar e auxiliar no aprendizado sobre organização financeira pessoal, controle de gastos e planejamento econômico.
        </p>
      </section>
      <Box className="absolute bottom-16">
        <Button sx={{
          background: "#16a34a",
          '&:hover': {
            backgroundColor: '#22c55e',
          },
        }}
          variant="contained"
          size="large"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => router.push("/financial-education")}>
          Começar
        </Button>
      </Box>
    </main>

  )
}
export default Home