const FeesCard = () => (
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col space-y-4">
    <div className="flex justify-between items-center">
      <p className="text-secondaryText">Maker</p>
      <p className="text-lg font-bold">0.069%</p>
    </div>
    <div className="flex justify-between items-center">
      <p className="text-secondaryText">Taker</p>
      <p className="text-lg font-bold">0.075%</p>
    </div>
  </div>
);

export default FeesCard;
