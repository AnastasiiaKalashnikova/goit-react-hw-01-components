import { Transaction } from "components/Transaction/Transaction"
import { TitelLine } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {    
    return (
    <table>
    <thead>
    <TitelLine>
      <th>{'Type'.toUpperCase()}</th>
      <th>{'Amount'.toUpperCase()}</th>
        <th>{'Currency'.toUpperCase()}</th>
    </TitelLine>
    </thead>
        <tbody>
            {items.map(item =>
                <Transaction id={item.id} type={item.type} amount={item.amount} currency={item.currency} />
            )}
        </tbody>
    </table>
    )
}