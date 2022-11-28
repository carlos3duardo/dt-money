import { useEffect, useState } from "react"
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
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions');
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        loadTransactions();
    }, []);

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