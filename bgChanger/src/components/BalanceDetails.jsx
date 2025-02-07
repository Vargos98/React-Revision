const BalanceDetails = () => (
  <div className="bg-primary text-white p-6 rounded-xl space-y-4 shadow-lg">
    <h2 className="text-lg font-semibold">Balance Details</h2>
    <p className="text-4xl font-bold">$2,136,045.00</p>
    <p className="text-sm text-gray-300">3.34105027 BTC</p>
    <div className="flex justify-between mt-4">
      <div>
        <p>Income</p>
        <p className="text-lg font-semibold">$3,256.00</p>
      </div>
      <div>
        <p>Expense</p>
        <p className="text-lg font-semibold">$1,289.00</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <button className="py-2 px-4 bg-white text-primary font-semibold rounded-lg">Receive</button>
      <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg">Send</button>
    </div>
  </div>
);

export default BalanceDetails;
