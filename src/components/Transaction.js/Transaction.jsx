export const Transaction = ({ id, amount, type, currency }) => {
    return (    
    <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
    </tr>
    )
}