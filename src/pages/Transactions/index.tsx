import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import { TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <TransactionsContainer>
      <SearchForm />

      <TransactionsTable>
        <tbody>
          {transactions.map(
            ({ id, description, type, value, category, createdAt }) => (
              <tr key={id}>
                <td>{description}</td>
                <td className={type}>{priceFormatter.format(value)}</td>
                <td>{category}</td>
                <td>{dateFormatter.format(new Date(createdAt))}</td>
              </tr>
            ),
          )}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
