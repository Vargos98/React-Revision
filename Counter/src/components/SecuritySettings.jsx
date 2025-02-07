const SecuritySettings = () => (
  <div className="bg-white p-6 shadow-lg rounded-xl">
    <h2 className="text-lg font-semibold mb-4">Security</h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p>Identity</p>
        <input type="checkbox" className="toggle-input" />
      </div>
      <div className="flex justify-between items-center">
        <p>Phone</p>
        <input type="checkbox" className="toggle-input" defaultChecked />
      </div>
    </div>
  </div>
);

export default SecuritySettings;
