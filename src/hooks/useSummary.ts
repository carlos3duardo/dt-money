import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.incomes += transaction.value
      } else {
        acc.outcomes += transaction.value
      }

      acc.total = acc.incomes - acc.outcomes

      return acc
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    },
  )

  return summary
}
