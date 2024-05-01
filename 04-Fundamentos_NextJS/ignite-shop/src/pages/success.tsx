import { ISuccess } from '@/interface'
import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

export default function Success({ customerName, product }: ISuccess) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="flex flex-col items-center justify-center my-0 mx-auto h-[656px] text-gray100">
        <h1 className="text-[32px]">Compra efetuada</h1>
        <div className="w-full max-w-[130px] h-36 bg-gradient-to-r from-[#1ea483] to-[#7465d4] rounded-lg p-1 flex items-center justify-center mt-16">
          <Image
            src={product.imageUrl}
            alt=""
            className="object-cover"
            width={120}
            height={110}
          />
        </div>
        <p className="text-2xl text-gray300 max-w-[560px] text-center mt-8 leading-2">
          Uhuul <strong>{customerName}</strong>, sua
          <strong> {product.name} </strong>
          já está a caminho da sua casa.
        </p>
        <Link href="/" className="mt-20 block text-green500 text-xl font-bold">
          Voltar ao catálogo
        </Link>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
