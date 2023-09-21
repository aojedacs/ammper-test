export default function TransactionsTable({transactions}) {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {transaction.description}
                </th>
                <td className="px-6 py-4">${transaction.amount} MXN</td>
                <td className="px-6 py-4">
                  {transaction.category ? transaction.category : "N/A"}
                </td>
                <td className="px-6 py-4">{transaction.status}</td>
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
