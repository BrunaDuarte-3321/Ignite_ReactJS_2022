export interface IHome {
  products: {
    id: string
    name: string
    imageUrl: string
    url: string
    price: string
  }[]
}

export interface IProduct {
  product: {
    id: string
    name: string
    imageUrl: string
    url: string
    price: string
    description: string
  }
}
