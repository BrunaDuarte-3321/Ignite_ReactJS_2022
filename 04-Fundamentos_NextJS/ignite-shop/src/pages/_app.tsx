import type { AppProps } from 'next/app'
import Image from 'next/image'
import logoImage from '../assets/logo.svg'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen">
      <header className="py-2 px-0 w-full max-w-[1180px]  m-auto">
        <Image src={logoImage} alt="logo ignite Shop" />
      </header>
      <Component {...pageProps} />
    </div>
  )
}
