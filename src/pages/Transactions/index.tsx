import { SearchForm } from "./components/SearchForm"
import { TransactionsContainer, TransactionsTable } from "./styles"


export function Transactions() {
    return (
        <TransactionsContainer>

            <SearchForm />

            <TransactionsTable>
               <tr>
                   <td>Desenvolvimento de site</td>
                   <td className="income">R$ 12.000,00</td>
                   <td>Serviço</td>
                   <td>13/04/2022</td>
               </tr>
               <tr>
                   <td>Almoço</td>
                   <td className="outcome">R$ 40,00</td>
                   <td>Alimentação</td>
                   <td>13/04/2022</td>
               </tr>
            </TransactionsTable>
        </TransactionsContainer>
    )
}