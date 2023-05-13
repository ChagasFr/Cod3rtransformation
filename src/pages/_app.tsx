import { ContadorPovedor } from '@/data/contexts/ContadorContexto'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContadorPovedor>
      <Component {...pageProps} />
    </ContadorPovedor>
  )
}
