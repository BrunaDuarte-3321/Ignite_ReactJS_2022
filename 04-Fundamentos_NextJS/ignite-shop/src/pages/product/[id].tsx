import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import Image from 'next/image'
import axios from "axios"
import { useState } from "react"
import Head from "next/head"



interface ProdcutProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}
export default function Product({ product }:ProdcutProps){
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
 async function  handleBuyProduct(){
   try {
    setIsCreatingCheckoutSession(true)
     const response = await axios.post('/api/checkout', {
      priceId: product.defaultPriceId
     })
     const { checkoutUrl } = response.data
     window.location.href = checkoutUrl

   } catch(err){
    setIsCreatingCheckoutSession(false)
    alert('falha ai redirecionar')
   }
 }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt=""/>  
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>{product.price}</span>
          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar Agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_NfzXG530OPJMRd'}}
    ], 
    fallback: true
  }
}
 
export const getStaticProps:GetStaticProps<any, {id: string}> = async ({params}) => {

  const productId = params!.id

  const product = await stripe.products.retrieve( productId, {
    expand:['default_price']

  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100) ,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 /* Nova requisição ao backend a cada 1h */
  }
}