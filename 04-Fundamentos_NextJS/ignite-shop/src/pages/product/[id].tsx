import { IProduct } from '@/interface'
import { stripe } from '@/lib/stripe'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Stripe from 'stripe'

export default function Product({ product }: IProduct) {
  const [isCreatingCheckoutSession, setIsCreateCheckoutSeesion] =
    useState(false)
  async function handleByProduct() {
    try {
      setIsCreateCheckoutSeesion(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreateCheckoutSeesion(false)
      alert('Falha ao redirecionar ao checkout')
      // Conectar com uma ferramenta de observabilidade
    }
  }
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <main className="grid grid-cols-2 items-stretch gap-16 max-w-[1180px] my-0 mx-auto">
        <div className="w-full max-w-[576px] h-[656px]   bg-gradient-to-r from-[#1ea483] to-[#7465d4] rounded-lg flex items-center justify-center">
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt=""
            className="
          object-cover
        "
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[2rem]">{product.name}</h1>
          <span className="mt-4 block text[2rem] text-green300">
            {product.price}
          </span>
          <p className="mt-[2.5rem] text-lg leading-6 text-gray300">
            {product.description}
          </p>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleByProduct}
            className="mt-auto bg-green500 p-5 cursor-pointer font-bold text-lg hover:bg-green300 disabled:opacity-[0.07] disabled:cursor-not-allowed"
          >
            Comprar agora!
          </button>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
  // Função para fazer um precarregando de alguma informações, produtos mais vendidos, ou mais acessados
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId!, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
      revalidate: 60 * 60 * 1, // 1hours
    },
  }
}
