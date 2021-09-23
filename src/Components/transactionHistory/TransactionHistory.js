import s from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
    console.log(items)
    return (
        <table className={s.transaction}>
            <thead>
            <tr className={s.head}>
                <th className={s.item}>Type</th>
                <th className={s.item}>Amount</th>
                <th className={s.item}>Currency</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
            <tr className={s.row} key={item.id}>
                    <td className={s.item}>{item.type}</td>
                    <td className={s.item}>{item.amount}</td>
                    <td className={s.item}>{item.currency}</td>
            </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TransactionHistory;
