
import { useState } from "react";
import Navbar from "../components/Navbar";

const Buy = () => {
    const [usdAmount, setUsdAmount] = useState("1000");
    const [equityShare, setEquityShare] = useState("OA TESLA");
    const [digitalCurrency, setDigitalCurrency] = useState("OPEN APP");

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
                
            </div>
        </>

    );
};

export default Buy;
