
import { useState } from "react";
import Navbar from "../components/Navbar";

const Buy = () => {
    const [usdAmount, setUsdAmount] = useState("1000");
    const [equityShare, setEquityShare] = useState("OA TESLA");
    const [digitalCurrency, setDigitalCurrency] = useState("OPEN APP");

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-900 to-green-700">
                <div className="w-[400px] rounded-2xl p-6 shadow-lg bg-white">
                    <h2 className="text-2xl font-bold text-green-700 text-center">BUY SHARES</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block font-semibold text-gray-700">USD Amount</label>
                            <input
                                type="text"
                                value={`$${usdAmount}`}
                                readOnly
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100 text-gray-700 text-lg font-semibold"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700">Equity Shares</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100"
                                value={equityShare}
                                onChange={(e) => setEquityShare(e.target.value)}
                            >
                                <option value="OA TESLA">OA TESLA</option>
                                <option value="OA APPLE">OA APPLE</option>
                            </select>
                            <p className="text-xs text-gray-500 mt-1">*USD LIVE EQUITY SHARE VALUE: $406</p>
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700">Digital Currency</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100"
                                value={digitalCurrency}
                                onChange={(e) => setDigitalCurrency(e.target.value)}
                            >
                                <option value="OPEN APP">OPEN APP</option>
                                <option value="OPEN BTC">OPEN BTC</option>
                            </select>
                            <p className="text-xs text-gray-500 mt-1">*USD LIVE DIGITAL VALUE: $0.0001</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center mt-4">
                            <div>
                                <p className="text-sm font-semibold">Open App</p>
                                <p className="text-xs text-gray-600">Total Open App: 8,000,000</p>
                            </div>
                            <div className="text-3xl">⇄</div>
                            <div>
                                <p className="text-sm font-semibold">OA Tesla</p>
                                <p className="text-xs text-gray-600">Total Tesla: 2.5 Shares</p>
                            </div>
                        </div>
                        <button className="w-full bg-green-700 text-white font-semibold py-2 rounded-lg mt-4">CONFIRM BUY</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Buy;
