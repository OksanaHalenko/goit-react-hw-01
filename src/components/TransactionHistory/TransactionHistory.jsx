import css from './TransactionHistory.module.css';
import clsx from 'clsx';

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableHeder}>Type</th>
          <th className={css.tableHeder}>Amount</th>
          <th className={css.tableHeder}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.row} key={item.id}>
            <td className={clsx(css.columns, css.typeColumn)}>{item.type}</td>
            <td className={css.columns}>{item.amount}</td>
            <td className={css.columns}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
