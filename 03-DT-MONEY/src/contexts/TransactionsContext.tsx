import { createContext, ReactNode, useEffect, useState } from 'react'

interface TransactionsProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: TransactionsProps[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<TransactionsProps[]>([])

  const fetchTransactions = async (query?: string) => {
    const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }
    const repsonse = await fetch(url)
    const data = await repsonse.json()
    setTransaction(data)
  }
  useEffect(() => {
    fetchTransactions()
  }, [])
  return (
    // eslint-disable-next-line no-undef
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
