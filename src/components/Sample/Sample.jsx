import React from "react";

const DepositPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg w-full max-w-5xl">
        <h1 className="text-center text-2xl font-bold mb-6">DEPOSIT</h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 bg-gray-700 p-4 rounded-lg">
            <nav className="space-y-4">
              {[
                "Bank Transfer",
                "UPI",
                "Net Banking",
              ].map((method, index) => (
                <button
                  key={index}
                  className="w-full text-left px-2 py-2 bg-gray-600 hover:bg-yellow-500 hover:text-black rounded-lg font-medium"
                >
                  {method}
                </button>
              ))}
            </nav>
          </div>
          <div className="col-span-3 bg-gray-700 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">SELECT AMOUNT</h2>

            <div className="flex flex-wrap gap-4 mb-6">
              {[500, 5000, 10000, 20000, 50000, 1000000].map((amount, index) => (
                <button
                  key={index}
                  className="px-3 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                >
                  ₹ {amount.toLocaleString()}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Bonus Code"
                className="w-full px-4 py-2 bg-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Need help? Please check the how-to deposit guide or contact us on live
              chat/email now.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "SPORTS BONUS",
                  description: "Claim until : 2024-12-31",
                },
                {
                  title: "2ND SPORTS BONUS",
                  description: "Claim until : 2024-12-31",
                },
              ].map((bonus, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-600 rounded-lg flex flex-col items-center"
                >
                  <h3 className="font-medium mb-2">{bonus.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{bonus.description}</p>
                  <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
                    APPLY CODE
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Transfer Details</h3>
              {[
                { label: "Bank Name", value: "BANK OF MAHARASHTRA" },
                { label: "Account Holder Name", value: "R B ENTERPRISES" },
              ].map((detail, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">{detail.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{detail.value}</span>
                    <button className="px-2 py-1 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
                      Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;