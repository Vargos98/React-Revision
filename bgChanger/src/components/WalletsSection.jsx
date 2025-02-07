const WalletsSection = () => (
  <div className="bg-white p-6 shadow-lg rounded-xl">
    <h2 className="text-lg font-semibold mb-4">Wallets</h2>
    <div className="space-y-4">
      {[
        { name: "BTE", percentage: 37, change: "-2.5%" },
        { name: "DAI", percentage: 23, change: "+7.2%" },
        { name: "XRP", percentage: 20, change: "-3.1%" },
        { name: "USDT", percentage: 17, change: "+1.8%" },
      ].map(({ name, percentage, change }, index) => (
        <div key={index} className="flex justify-between items-center">
          <p>{name}</p>
          <div className="flex items-center space-x-2">
            <p>{percentage}%</p>
            <p className={`text-${change.includes('-') ? 'red-500' : 'green-500'}`}>{change}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WalletsSection;
