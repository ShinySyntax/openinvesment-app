import { useState, useRef, useEffect, useMemo } from 'react';
import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import dropdown from "../asset/email.png";
import swap from "../asset/swap.png";

const EQUITY_OPTIONS = ['OA Tesla', 'OA Apple', 'OA Amazon', 'OA Google'];

const Swap = () => {
  const [selectedEquityFrom, setSelectedEquityFrom] = useState(EQUITY_OPTIONS[0]);
  const [selectedEquityTo, setSelectedEquityTo] = useState(EQUITY_OPTIONS[1]);
  const [amount, setAmount] = useState('0.00');
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);

  const fromRef = useRef(null);
  const toRef = useRef(null);

  const equityToOptions = useMemo(() => 
    EQUITY_OPTIONS.filter(option => option !== selectedEquityFrom),
    [selectedEquityFrom]
  );

  useEffect(() => {
    if (!equityToOptions.includes(selectedEquityTo)) {
      setSelectedEquityTo(equityToOptions[0]);
    }
  }, [equityToOptions, selectedEquityTo]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setIsFromDropdownOpen(false);
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setIsToDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSwap = () => {
    const temp = selectedEquityFrom;
    setSelectedEquityFrom(selectedEquityTo);
    setSelectedEquityTo(temp);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 7);
    setAmount(value);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
        <div className="xl:w-[40%] sm:mb-0 mb-5 xl:mt-0 lg:mt-7 md:w-[70%] w-[95%] sm:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
          <div className="flex border-b-[2.5px] border-[#103532]">
            <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#103532] flex justify-center items-center">
              <img src={logo} className="sm:w-[50%] w-[60%]" alt="logo" />
            </div>
            <div className="pl-4 flex items-center">
              <h3 className="font-inter py-3 sm:text-3xl text-xl font-bold leading-none uppercase text-[#8ABD90]">
                <span className="text-[#15413F]">S</span>wap <br />
                <span className="text-[#15413F]">S</span>hares
              </h3>
            </div>
          </div>
          <div className="p-8 sm:pb-8 pb-3">
            <div className="w-full flex items-start">
              <div className="w-full">
                <div className="sm:flex w-full shadow-lg">
                  <div className="sm:w-[30%] sm:rounded-l-md border-2 border-[#103532] p-3 justify-center sm:items-start items-center flex sm:flex-col flex-row sm:gap-0 gap-2">
                    <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                      U<span className="text-[#8FC292]">SD</span>
                    </h4>
                    <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">
                      A<span className="text-[#8FC292]">mount</span>
                    </h4>
                  </div>
                  <div className="sm:rounded-r-md w-full border-2 sm:border-l-0 border-[#103532] sm:border-t-2 border-t-0">
                    <div className="flex items-center justify-center gap-1 h-full py-2 pl-20">
                      <span className="font-inter text-[18px] font-bold text-[#204E4B] ">$</span>
                      <input 
                        type="text" 
                        className="font-inter focus:outline-none text-[18px] font-bold text-[#204E4B] w-20"
                        value={new Intl.NumberFormat().format(amount)}
                        onChange={handleAmountChange}
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-7">
                  <div className="sm:flex shadow-lg">
                    <div className="sm:w-[30%] w-full sm:rounded-l-md border-2 border-[#103532] p-3 justify-center sm:items-start items-center flex sm:flex-col flex-row sm:gap-0 gap-2">
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                        E<span className="text-[#8FC292]">quity</span> <br />

                      </h4>
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">
                        S<span className="text-[#8FC292]">hares</span>
                      </h4>
                    </div>
                    <div ref={fromRef} className="sm:rounded-r-md select-box-div w-full border-2 sm:border-l-0 border-[#103532] relative sm:border-t-2 border-t-0">
                      <div className="flex items-center px-3 sm:py-2 py-3 min-h-full cursor-pointer">
                        <div className="w-[7%] sm:block hidden">
                          <img 
                            src={dropdown} 
                            onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)} 
                            alt="from"
                            className={`cursor-pointer transition-transform duration-300 ${isFromDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <img 
                          src={dropdown} 
                          onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)} 
                          className={`sm:hidden block w-[7%] mr-3 cursor-pointer transition-transform duration-300 ${isFromDropdownOpen ? 'rotate-180' : ''}`}
                          alt="from"
                        />
                        <div className="w-[93%] text-center">
                          <span className="font-inter text-[18px] font-bold text-[#204E4B]">
                            {selectedEquityFrom}
                          </span>
                        </div>
                      </div>
                      {isFromDropdownOpen && (
                        <ul className="absolute z-10 w-full bg-white border border-[#103532] mt-1 rounded-md max-h-32 overflow-auto">
                          {EQUITY_OPTIONS.map(option => (
                            <li key={option} onClick={() => { setSelectedEquityFrom(option); setIsFromDropdownOpen(false); }} className="font-inter text-[16px] font-semibold text-[#204E4B] px-3 py-2 cursor-pointer">
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="sm:ml-[25%]">
                    <p className="mt-1 font-bold text-[#528067] text-[9px]">
                      USD Live Equity Share Value: $0.00
                    </p>
                  </div>
                </div>
                <div className="w-full mt-3">
                  <div className="sm:flex shadow-lg">
                    <div className="sm:w-[30%] w-full sm:rounded-l-md border-2 border-[#103532] p-3 justify-center sm:items-start items-center flex sm:flex-col flex-row sm:gap-0 gap-2">
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                        E<span className="text-[#8FC292]">quity</span> <br />
                      </h4>
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">
                        S<span className="text-[#8FC292]">hares</span>
                      </h4>
                    </div>
                    <div ref={toRef} className="sm:rounded-r-md select-box-div w-full border-2 sm:border-l-0  border-[#103532] relative sm:border-t-2 border-t-0">
                      <div className="flex items-center px-3 sm:py-2 py-3 min-h-full cursor-pointer">
                        <div className="sm:w-[7%] sm:block hidden">
                          <img 
                          onClick={() => setIsToDropdownOpen(!isToDropdownOpen)} 
                            src={dropdown} 
                            alt="to"
                            className={`cursor-pointer transition-transform duration-300 ${isToDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <img 
                        onClick={() => setIsToDropdownOpen(!isToDropdownOpen)} 
                          src={dropdown} 
                          className={`sm:hidden block w-[7%] mr-3 cursor-pointer transition-transform duration-300 ${isToDropdownOpen ? 'rotate-180' : ''}`}
                          alt="to"
                        />
                        <div className="w-[93%] text-center">
                          <span className="font-inter text-[18px] font-bold text-[#204E4B]">
                            {selectedEquityTo}
                          </span>
                        </div>
                      </div>
                      {isToDropdownOpen && (
                        <ul className="absolute z-10 w-full max-h-32 overflow-auto bg-white border border-[#103532] mt-1 rounded-md">
                          {equityToOptions.map(option => (
                            <li key={option} onClick={() => { setSelectedEquityTo(option); setIsToDropdownOpen(false); }} className="font-inter text-[16px] font-semibold text-[#204E4B] px-3 py-2 cursor-pointer">
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="sm:ml-[25%]">
                    <p className="mt-1 font-bold text-[#528067] text-[9px]">
                      USD Live Equity Share Value: $0.00
                    </p>
                  </div>
                </div>
                <div className="w-full mt-3">
                  <div className="sm:flex">
                    <div className="w-[30%] sm:p-3"></div>
                    <div className="w-full">
                      <div className="sm:flex items-center justify-between rounded-md border-2 border-[#103532] px-4 sm:py-0 py-2">
                        <div className="sm:w-[33%] text-center">
                          <h4 className="font-inter text-[18px] font-bold text-[#204E4B]">
                            {selectedEquityFrom}
                          </h4>
                          <p className="mt-1 font-bold text-[#528067] text-[9px]">
                            Total OA {selectedEquityFrom.split(' ')[1] || selectedEquityFrom}: 0.0
                          </p>
                        </div>
                        <div className="sm:w-[33%] text-center my-4">
                          <button onClick={handleSwap} className="hover:scale-110 transition-transform duration-300">
                            <img src={swap} className="sm:w-[40%] w-[15%] mx-auto border-2 border-[#86BA8E] p-3 rounded-md" alt="swap" />
                          </button>
                        </div>
                        <div className="sm:w-[33%] text-center">
                          <h4 className="font-inter text-[18px] font-bold text-[#204E4B]">
                            {selectedEquityTo}
                          </h4>
                          <p className="mt-1 font-bold text-[#528067] text-[9px]">
                            Total OA {selectedEquityTo.split(' ')[1] || selectedEquityTo}: 0.0
                          </p>
                        </div>
                      </div>
                      <div className="mt-10">
                        <button className="bg-[#31685B] hover:bg-[#25544a] text-white w-full py-3 uppercase font-inter text-lg text-center rounded-md transition-colors duration-300">
                        Swap
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swap;