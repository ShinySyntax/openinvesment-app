import { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import dropdown from "../asset/email.png";
import { Link } from "react-router-dom";

const ActionProMode = () => {
    const [selectedShare, setSelectedShare] = useState('OA_Tesla');
    const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [sharesData, setSharesData] = useState({
        OA_Tesla: {
            buyUnits: 0,
            buyPrice: 0,
            initialInvestment: 0,
            closeUnits: 0,
            totalValue: 0,
            percentage: "0%",
        },
        OA_Apple: {
            buyUnits: 0,
            buyPrice: 0,
            initialInvestment: 0,
            closeUnits: 0,
            totalValue: 0,
            percentage: "0%",
        },
        OA_Amazon: {
            buyUnits: 0,
            buyPrice: 0,
            initialInvestment: 0,
            closeUnits: 0,
            totalValue: 0,
            percentage: "0%",
        }
    });
    const shareDropdownRef = useRef(null);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (shareDropdownRef.current && !shareDropdownRef.current.contains(event.target)) {
                setIsShareDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    const handleInputChange = (field, value) => {
        setSharesData(prev => ({
            ...prev,
            [selectedShare]: {
                ...prev[selectedShare],
                [field]: value
            }
        }));
    };
    
    const formatTimestamp = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const time = date.toLocaleTimeString();
        return `(${day}/${month}/${year}) (${time})`;
    };
    
    const currentData = sharesData[selectedShare];
    
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
                <div className="sm:w-[85%] w-[95%] sm:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
                    <div className="flex items-center border-b-[2.5px] border-[#15413F]">
                        <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#15413F] flex justify-center items-center ">
                            <img src={logo} className="sm:w-[50%] w-[80%]" alt="logo" />
                        </div>
                        <div className="pl-4">
                            <h3 className="font-inter sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]"> 
                                <span className="text-[#15413F]">A</span>ccount <br /> 
                                <span className="text-[#15413F]">P</span>ro Mode
                            </h3>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="dropdown-box w-full flex sm:flex-row flex-col items-start">
                            <div ref={shareDropdownRef} className="sm:w-[20%] w-full relative sm:shadow-lg sm:border-b-[2px] border-b-0 border-[2px] sm:border-r-0 border-[#15413F] flex justify-between p-3">
                                <div className="flex justify-between items-center gap-1 w-full">
                                    <div className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B] bg-transparent rounded-lg px-2 transition-colors w-full">
                                        {selectedShare === "OA_Tesla" && "OA Tesla Buy"}
                                        {selectedShare === "OA_Apple" && "OA Apple Buy"}
                                        {selectedShare === "OA_Amazon" && "OA Amazon Buy"}
                                    </div>
                                    <img onClick={() => setIsShareDropdownOpen(!isShareDropdownOpen)} src={dropdown} className={`sm:w-[15%] w-[10%] cursor-pointer transition-transform duration-300 ${isShareDropdownOpen ? "rotate-180" : ""}`} alt="share-icon" />
                                </div>
                                {isShareDropdownOpen && (
                                    <ul className="absolute max-h-32 overflow-auto top-full w-[99%] left-0 z-10 bg-white border border-[#15413F] mr-4 mt-1 rounded-md">
                                        <li onClick={() => { setSelectedShare("OA_Tesla"); setIsShareDropdownOpen(false); }} className="font-inter sm:text-[16px] text-sm leading-none font-bold uppercase text-[#204E4B] px-2 py-2 cursor-pointer">OA Tesla Buy</li>
                                        <li onClick={() => { setSelectedShare("OA_Apple"); setIsShareDropdownOpen(false); }} className="font-inter sm:text-[16px] text-sm leading-none font-bold uppercase text-[#204E4B] px-2 py-2 cursor-pointer">OA Apple Buy</li>
                                        <li onClick={() => { setSelectedShare("OA_Amazon"); setIsShareDropdownOpen(false); }} className="font-inter sm:text-[16px] text-sm leading-none font-bold uppercase text-[#204E4B] px-2 py-2 cursor-pointer">OA Amazon Buy</li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-full">
                                <div className="account-scrollbar">
                                    <div className="flex w-full items-start">
                                        <div className="flex sm:w-[90%] w-[70%] min-h-[53.5px]">
                                            <div className="w-full border-[2px] border-[#15413F] ">
                                                <div className="flex gap-2 items-center min-h-full justify-center">
                                                    <input
                                                        type="text"
                                                        value={currentData.buyUnits}
                                                        onChange={(e) => handleInputChange('buyUnits', e.target.value)}
                                                        className="w-10 appearance-none text-right bg-transparent font-inter sm:text-[18px] text-[12px] outline-none text-sm leading-none font-bold uppercase text-[#204E4B]"
                                                        step="0.1"
                                                    />
                                                    <span className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]"> Units</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:w-[10%] w-[30%]">
                                            <div className="flex justify-center min-h-[53.5px] items-center border-l-0 border-[2px] border-[#15413F]">
                                                <div className="w-[50%]">
                                                    <input
                                                        type="text"
                                                        value={currentData.percentage}
                                                        onChange={(e) => handleInputChange('percentage', e.target.value)}
                                                        className="w-10 appearance-none text-center bg-transparent font-inter sm:text-[18px] text-[12px] outline-none text-sm leading-none font-bold uppercase text-[#204E4B]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] sm:p-3 p-1">
                                                <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                    {selectedShare.split('_')[1]} <br /> 
                                                    <span className="text-[#8FC292]">Open Price</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center gap-1 sm:text-[18px] text-[12px]">
                                                    <input
                                                        type="text"
                                                        value={currentData.buyUnits}
                                                        onChange={(e) => handleInputChange('buyUnits', e.target.value)}
                                                        className="w-10 text-center bg-transparent outline-none font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]"
                                                        step="0.1"
                                                    />
                                                    <span className='font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]'>Units @ $</span>
                                                    <input
                                                        type="text"
                                                        value={currentData.buyPrice}
                                                        onChange={(e) => handleInputChange('buyPrice', e.target.value)}
                                                        className="w-6 text-left bg-transparent outline-none font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]"
                                                        step="0.1"
                                                    />
                                                    <span className='font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]'>per Share {formatTimestamp(currentTime)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] sm:p-3 p-1">
                                                <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                    Open {selectedShare.split('_')[1]} <br /> 
                                                    <span className="text-[#8FC292]">Initial Investment</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <input
                                                        type="text"
                                                        value={currentData.initialInvestment}
                                                        onChange={(e) => handleInputChange('initialInvestment', e.target.value)}
                                                        className="w-full text-center bg-transparent outline-none font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B] font-inter sm:text-[18px] text-[12px]"
                                                        step="0.1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full sm:items-start">
                                        <div className="flex sm:w-[90%] w-[70%]">
                                            <div className="w-[34.4%] border-[2px] border-r-0 border-t-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                    {selectedShare.split('_')[1]} <span className="text-[#8FC292]">Close</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <input
                                                        type="text"
                                                        value={currentData.closeUnits}
                                                        onChange={(e) => handleInputChange('closeUnits', e.target.value)}
                                                        className="w-10 text-center bg-transparent outline-none font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B] font-inter sm:text-[18px] text-[12px]"
                                                        step="0.1"
                                                    />
                                                    <span className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]"> Units {formatTimestamp(currentTime)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:w-[10%] w-[30%]">
                                            <div className="flex items-center sm:min-h-[44px] min-h-full border-b-[2px] border-r-[2px] border-[#15413F]">
                                                <div className="w-full">
                                                    <input
                                                        type="text"
                                                        value={currentData.percentage}
                                                        onChange={(e) => handleInputChange('percentage', e.target.value)}
                                                        className="w-full text-center bg-transparent outline-none font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B] text-[12px]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-start">
                                        <div className="flex w-full">
                                            <div className="sm:w-[30%] w-[50%] border-[2px] border-r-0 border-t-0 border-[#15413F] sm:p-3 p-1">
                                                <h4 className="font-inter sm:text-[18px] text-[12px] leading-none font-bold uppercase text-[#204E4B]">
                                                    {selectedShare.split('_')[1]} <br /> 
                                                    <span className="text-[#8FC292]">Total Value</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-t-0 border-[#15413F] ">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <input
                                                        type="text"
                                                        value={currentData.totalValue}
                                                        onChange={(e) => handleInputChange('totalValue', e.target.value)}
                                                        className="w-full text-center bg-transparent outline-none text-sm leading-none font-bold uppercase text-[#204E4B] font-inter sm:text-[18px] text-[12px]"
                                                        step="0.1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="mt-5 flex justify-end">
                                        <Link to={'/transaction-history'} className="bg-[#31685B] text-white sm:w-[40%] w-full py-3 uppercase font-inter xl:text-lg text-sm text-center rounded-md hover:bg-[#25544a] transition-colors">
                                            View Transaction History
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActionProMode;
