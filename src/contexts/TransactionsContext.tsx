import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionProps {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    value: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: TransactionProps[];
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}: TransactionsProviderProps) {
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
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}