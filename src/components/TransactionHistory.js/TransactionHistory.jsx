import { Transaction } from "components/Transaction.js/Transaction"

export const TransactionHistory = ({ items }) => {    
    return (
    <table className="transaction-history">
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
        <tbody>
            {items.map(item =>
                <Transaction id={item.id} type={item.type} amount={item.amount} currency={item.currency} />
            )}
        </tbody>
    </table>
    )
}