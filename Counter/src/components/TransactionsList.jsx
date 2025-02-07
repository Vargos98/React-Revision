const TransactionsList = () => (
  <div className="bg-white p-6 shadow-lg rounded-xl">
    <h2 className="text-lg font-semibold mb-4">Transactions</h2>
    <div className="space-y-4">
      {[
        { type: "Sent BTE", date: "12 Nov, 2020", amount: "- $1,289.00", color: "red-500" },
        { type: "Received USDT", date: "12 Nov, 2020", amount: "+ $1,045.00", color: "green-500" },
        { type: "Sent XRP", date: "12 Nov, 2020", amount: "- $2,686.00", color: "red-500" },
      ].map(({ type, date, amount, color }, index) => (
        <div key={index} className="flex justify-between items-center">
          <div>
            <p className="font-medium">{type}</p>
            <p className="text-secondaryText text-sm">{date}</p>
          </div>
          <p className={`text-${color} font-semibold`}>{amount}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionsList;
