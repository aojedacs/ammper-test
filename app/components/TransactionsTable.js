export default function TransactionsTable({ transactions }) {
  const onTransactionAmount = (transaction) => {
    let amount = transaction.amount;
    let type = transaction.type;

    if (type == "INFLOW") {
      if (amount > 0) {
        return <p class="text-green-500">${amount} MXN</p>;
      } else {
        return <p class="text-gray-50">+ ${amount} MXN</p>;
      }
    } else {
      return <p class="text-red-600">- ${amount} MXN</p>;
    }
  };

  const onTransactionStatus = (status) => {
    if (status == "PROCESSED") {
      return <p class="text-green-500">{status}</p>;
    } else {
      return <p class="text-amber-500">{status}</p>;
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => {
            return (
              <tr
                key={transaction.id}
                id={transaction.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  key={transaction.id}
                  id={transaction.id}
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {transaction.description}
                </th>
                <td className="px-6 py-4">
                  {onTransactionAmount(transaction)}
                </td>
                <td className="px-6 py-4 ">
                  {transaction.category ? transaction.category : "N/A"}
                </td>
                <td className="px-6 py-4">
                  {onTransactionStatus(transaction.status)}
                </td>
                <td className="px-6 py-4">{transaction.type}</td>
                <td className="px-6 py-4">
                  {new Date(transaction.collected_at).toString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
