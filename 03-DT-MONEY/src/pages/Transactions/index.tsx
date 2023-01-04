import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { useTransactions } from '../../hooks/useTransactions'
import { SearchForm } from './components/SearchForm'
import {
  PriceHightLight,
  TransactionsContainer,
  TransctionsTable,
} from './styles'

export function Transactions() {
  const { transactions } = useTransactions()
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransctionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHightLight variant="income">
                    R$ {transaction.price}
                  </PriceHightLight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransctionsTable>
      </TransactionsContainer>
    </div>
  )
}
