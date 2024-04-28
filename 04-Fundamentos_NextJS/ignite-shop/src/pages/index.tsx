import { IHome } from '@/interface'
import { stripe } from '@/lib/stripe'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

export default function Home({ products }: IHome) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <main
      className="keen-slider flex w-full max-w-screen-customW ml-auto min-h-[656px] "
      ref={sliderRef}
    >
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="relative bg-gradient-to-r from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer flex items-center justify-center opacity-[1] group keen-slider__slide"
        >
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt=""
            className="object-cover"
          />
          <footer className="absolute bottom-1 left-1 right-1 rounded-[6px] flex items-center p-8 justify-between bg-black/[0.6] translate-y-[110%] opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
            <strong className="text-xl">{product.name}</strong>
            <span className="text-2xl font-bold text-green300">
              {product.price}
            </span>
          </footer>
        </Link>
      ))}
    </main>
  )
}

// Código não fica visível para usuário final, usado para códigos sensível, autenticação por exemplo

export const getStaticProps: GetStaticProps = async () => {
  // Usando GetStaticProps, não temos acesso ao contexto da requisição, ex: info do usuário logado, cookies, headers... Paginas estáticas são iguais para qualquer user que tenha acesso.

  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })
  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 1, // Requisição a API a cada 1h
  }
}
