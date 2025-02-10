import { useState, useRef, useEffect } from 'react';
import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import dropdown from "../asset/email.png";
import swap from "../asset/swap.png";

const Buy = () => {
  const [selectedEquity, setSelectedEquity] = useState('OA Tesla');
  const [selectedCurrency, setSelectedCurrency] = useState('OPEN APP');
  const [displayEquity, setDisplayEquity] = useState(selectedEquity);
  const [displayCurrency, setDisplayCurrency] = useState(selectedCurrency);
  const [amount, setAmount] = useState('0.00');
  const [equityOptions, setEquityOptions] = useState(['OA Tesla', 'OA Apple', 'OA Amazon', 'OA Google']);
  const [currencyOptions, setCurrencyOptions] = useState(['OPEN APP', 'Bitcoin', 'Ethereum', 'USD Coin']);
  const [isEquityDropdownOpen, setIsEquityDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const equityRef = useRef(null);
  const currencyRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (equityRef.current && !equityRef.current.contains(event.target)) {
        setIsEquityDropdownOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setIsCurrencyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSwap = () => {
    const newDisplayEquity = displayCurrency;
    const newDisplayCurrency = displayEquity;
    setDisplayEquity(newDisplayEquity);
    setDisplayCurrency(newDisplayCurrency);
    const newSelectedEquity = selectedCurrency;
    const newSelectedCurrency = selectedEquity;
    setSelectedEquity(newSelectedEquity);
    setSelectedCurrency(newSelectedCurrency);
    const newEquityOptions = currencyOptions;
    const newCurrencyOptions = equityOptions;
    setEquityOptions(newEquityOptions);
    setCurrencyOptions(newCurrencyOptions);
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
                <span className="text-[#15413F]">B</span>uy <br />
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
                        D<span className="text-[#8FC292]">igital</span>
                      </h4>
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">
                        C<span className="text-[#8FC292]">urrency</span>
                      </h4>
                    </div>
                    <div ref={currencyRef} className="sm:rounded-r-md select-box-div w-full border-2 sm:border-l-0  border-[#103532] relative sm:border-t-2 border-t-0">
                      <div className="flex items-center px-3 sm:py-2 py-3 min-h-full cursor-pointer">
                        <div className="sm:w-[7%] sm:block hidden">
                          <img
                            onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                            src={dropdown}
                            alt="currency"
                            className={`cursor-pointer transition-transform duration-300 ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <img
                          onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                          src={dropdown}
                          className={`sm:hidden block w-[7%] mr-3 cursor-pointer transition-transform duration-300 ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`}
                          alt="currency"
                        />
                        <div className="w-[93%] text-center">
                          <span className="font-inter text-[18px] font-bold text-[#204E4B]">
                            {selectedCurrency}
                          </span>
                        </div>
                      </div>
                      {isCurrencyDropdownOpen && (
                        <ul className="absolute z-10 w-full max-h-32 overflow-auto bg-white border border-[#103532] mt-1 rounded-md">
                          {currencyOptions.map(option => (
                            <li key={option} onClick={() => { setSelectedCurrency(option); setDisplayCurrency(option); setIsCurrencyDropdownOpen(false); }} className="font-inter text-[16px] font-semibold text-[#204E4B] px-3 py-2 cursor-pointer">
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="sm:ml-[25%]">
                    <p className="mt-1 font-bold text-[#528067] text-[9px]">
                      USD Live Digital Currency Value: $0.00
                    </p>
                  </div>
                </div>
                <div className="w-full mt-3">
                  <div className="sm:flex shadow-lg">
                    <div className="sm:w-[30%] w-full sm:rounded-l-md border-2 border-[#103532] p-3 justify-center sm:items-start items-center flex sm:flex-col flex-row sm:gap-0 gap-2">
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                        E<span className="text-[#8FC292]">quity</span>
                      </h4>
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B] sm:mt-1">
                        S<span className="text-[#8FC292]">hares</span>
                      </h4>
                    </div>
                    <div ref={equityRef} className="sm:rounded-r-md select-box-div w-full border-2 sm:border-l-0 border-[#103532] relative sm:border-t-2 border-t-0">
                      <div className="flex items-center px-3 sm:py-2 py-3 min-h-full cursor-pointer">
                        <div className="w-[7%] sm:block hidden">
                          <img
                            src={dropdown}
                            onClick={() => setIsEquityDropdownOpen(!isEquityDropdownOpen)}
                            alt="equity"
                            className={`cursor-pointer transition-transform duration-300 ${isEquityDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
                        <img
                          src={dropdown}
                          onClick={() => setIsEquityDropdownOpen(!isEquityDropdownOpen)}
                          className={`sm:hidden block w-[7%] mr-3 cursor-pointer transition-transform duration-300 ${isEquityDropdownOpen ? 'rotate-180' : ''}`}
                          alt="equity"
                        />
                        <div className="w-[93%] text-center">
                          <span className="font-inter text-[18px] font-bold text-[#204E4B]">
                            {selectedEquity}
                          </span>
                        </div>
                      </div>
                      {isEquityDropdownOpen && (
                        <ul className="absolute z-10 w-full bg-white border border-[#103532] mt-1 rounded-md max-h-32 overflow-auto">
                          {equityOptions.map(option => (
                            <li key={option} onClick={() => { setSelectedEquity(option); setDisplayEquity(option); setIsEquityDropdownOpen(false); }} className="font-inter text-[16px] font-semibold text-[#204E4B] px-3 py-2 cursor-pointer">
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

                <div className="sm:flex w-full shadow-lg mt-3">
                  <div className="sm:w-[30%] sm:rounded-l-md border-2 border-[#103532] p-3 justify-center sm:items-start items-center flex sm:flex-col flex-row sm:gap-0 gap-2">
                    <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                      T<span className="text-[#8FC292]">rade</span> <br />
                    </h4>
                    <h4 className="sm:mt-1 font-inter text-[18px] leading-none font-bold uppercase text-[#204E4B]">
                      S<span className="text-[#8FC292]">ummary</span>
                    </h4>
                  </div>
                  <div className="sm:rounded-r-md w-full border-2 sm:border-l-0 border-[#103532] sm:border-t-2 border-t-0">
                    <div className="flex items-center gap-1 h-full py-2">
                      <div className='w-full'>
                        <div className='border-b-2 border-[#103532] pl-2 pb-3 pt-1 w-full'>
                          <p className="font-inter text-[14px] leading-none font-semibold uppercase text-[#204E4B] flex justify-between">
                            <span>
                              Digital <span className="text-[#8FC292]"> Esccrow: </span> </span>
                            <span className='flex justify-between'>
                              <span className="text-[#8FC292] pr-2">0.00</span>
                              <p className='w-24'>{selectedCurrency}</p>
                            </span>
                          </p>

                          <p className="mt-2.5 font-inter text-[14px] leading-none font-semibold uppercase text-[#204E4B] flex justify-between">
                            <span>
                              Equity <span className="text-[#8FC292]">Received: </span>
                            </span>
                            <span className='flex justify-between'>
                              <span className="text-[#8FC292] pr-2">0.00</span>
                              <p className='w-24'>{selectedEquity}</p>
                            </span>
                          </p>

                          <p className="mt-2.5  font-inter text-[14px] leading-none font-semibold uppercase text-[#204E4B] flex justify-between">
                            <span>
                              Fee Amount:
                            </span>
                            <span className='flex justify-between'>
                              <span className="text-[#8FC292] pr-2">0.00</span>
                              <p className='w-24'>{selectedCurrency}</p>
                            </span>
                          </p>
                        </div>
                        <div className='pl-2 pt-2'>
                          <p className="font-inter text-[14px] sm:leading-none font-semibold uppercase text-[#204E4B]  flex justify-between">
                            <span> Total Equity Received: </span>
                            <span className='flex justify-between'>
                              <span className="text-[#8FC292] pr-2">
                                0.00
                              </span>
                              <p className='w-24'>{selectedEquity}</p>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-3">
                  <div className="sm:flex">
                    <div className="w-[30%] sm:p-3"></div>
                    <div className="w-full">
                      <div className="mt-4">
                        <button className="bg-[#31685B] hover:bg-[#25544a] text-white w-full py-3 uppercase font-inter text-lg text-center rounded-md transition-colors duration-300">
                          Confirm Buy
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

export default Buy;