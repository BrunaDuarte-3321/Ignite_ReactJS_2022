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
}

interface TransactionsProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<TransactionsProps[]>([])

  useEffect(() => {
    const loadTransactions = async () => {
      const repsonse = await fetch('http://localhost:3000/transactions')
      const data = await repsonse.json()
      setTransaction(data)
    }
    loadTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
