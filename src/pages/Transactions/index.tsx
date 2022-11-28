import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm"
import { TransactionsContainer, TransactionsTable } from "./styles"

interface TransactionProps {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    value: number;
    category: 'string';
    createdAt: 'string';
}

export function Transactions() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <TransactionsContainer>

            <SearchForm />

            <TransactionsTable>
                <tbody>
                    {transactions.map(({id, description, type, value, category, createdAt}) => (
                        <tr key={id}>
                            <td>{description}</td>
                            <td className={type}>R$ {value}</td>
                            <td>{category}</td>
                            <td>{createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    )
}