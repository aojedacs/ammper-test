export default function Accounts({ accounts, accountId }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Number
            </th>
            <th scope="col" className="px-6 py-3">
              Balance
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Currency
            </th>
          </tr>
        </thead>
        <tbody>
          {accounts?.map((account) => {
            return (
              <tr
                key={account.id}
                id={account.id}
                onClick={(e) => {
                  console.log(e.target.id);
                  accountId(e.target.id);
                }}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  key={account.id}
                  id={account.id}
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {account.name}
                </th>
                <td className="px-6 py-4">{account.type}</td>
                <td className="px-6 py-4 ">{account.number}</td>
                <td className="px-6 py-4">{account.balance.current}</td>
                <td className="px-6 py-4">{account.category}</td>
                <td className="px-6 py-4">{account.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
