import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({items}) => {
    return (
        <div className={s.wrapper}>
            <h2>Transactions</h2>
            <table className={s.transaction}>
                <thead>
                <tr className={s.head}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr className={s.row} key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

TransactionHistory.propTypes = {
    friend: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}

export default TransactionHistory;
