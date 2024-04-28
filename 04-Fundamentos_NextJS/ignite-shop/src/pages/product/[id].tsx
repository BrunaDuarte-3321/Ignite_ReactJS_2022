import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  return <h1 className="text-rocketseat">Produtos: {JSON.stringify(query)}</h1>
}
