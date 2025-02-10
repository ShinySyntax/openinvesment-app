import { useState, useEffect, useRef } from 'react'
import Navbar from "../components/Navbar"
import logo from "../asset/logo.svg"
import email from "../asset/email.png"

const TransactionHistory = () => {
  const [selectedShare, setSelectedShare] = useState('OA_Tesla')
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false)
  const sharesData = {
    OA_Tesla: {
      totalUnits: 0,
      profitLoss: "+0%",
      transactions: [
        { units: 0.00, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" },
        { units: 0.00, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" },
        { units: 0.00, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" }
      ]
    },
    OA_Apple: {
      totalUnits: 0,
      profitLoss: "+0%",
      transactions: [
        { units: 0.00, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" },
        { units: 0.00, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" },
        { units: 0.00, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" }
      ]
    },
    OA_Amazon: {
      totalUnits: 0,
      profitLoss: "+0%",
      transactions: [
        { units: 2.1, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" },
        { units: 2.0, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" },
        { units: 2.1, timestamp: "(D/M/Y) (TIME STAMP)", percentage: "+0%" }
      ]
    }
  }
  const shareDropdownRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareDropdownRef.current && !shareDropdownRef.current.contains(event.target)) {
        setIsShareDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  const currentData = sharesData[selectedShare]
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
        <div className="sm:w-[85%] w-[95%] sm:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
          <div className="dropdown-div flex items-center border-b-[2.5px] border-[#15413F]">
            <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#15413F] flex justify-center items-center">
              <img src={logo} className="sm:w-[50%] w-[80%]" alt="logo" />
            </div>
            <div className="pl-4">
              <h3 className="font-inter sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]">
                <span className="text-[#15413F]">T</span>ransaction <br />
                <span className="text-[#15413F]">H</span>istory
              </h3>
            </div>
          </div>
          <div className="sm:p-8 p-2">
            <div className="w-full flex sm:flex-row flex-col items-start">
              <div ref={shareDropdownRef} className="sm:w-[20%] w-full sm:shadow-lg border-[2px] sm:border-r-0 border-[#15413F] flex justify-between p-3 relative">
                <div className="flex justify-between items-center gap-2 w-full">
                  <div className="appearance-none font-inter sm:text-[15px] text-sm leading-none font-bold uppercase text-[#204E4B] bg-transparent cursor-pointer rounded-lg px-2 transition-colors w-full">
                    {selectedShare === "OA_Tesla" && "OA Tesla Buy"}
                    {selectedShare === "OA_Apple" && "OA Apple Buy"}
                    {selectedShare === "OA_Amazon" && "OA Amazon Buy"}
                  </div>
                  <img
                    onClick={() => setIsShareDropdownOpen(!isShareDropdownOpen)}
                    src={email}
                    className={`sm:w-[15%] w-[10%] cursor-pointer transition-transform duration-300 ${isShareDropdownOpen ? "rotate-180" : ""}`}
                    alt="share-icon"
                  />
                </div>
                {isShareDropdownOpen && (
                  <ul className="absolute max-h-32 overflow-auto top-full left-0 z-10 w-[99%] bg-white border border-[#15413F] mt-1 rounded-md">
                    <li onClick={() => { setSelectedShare("OA_Tesla"); setIsShareDropdownOpen(false) }} className="font-inter sm:text-[15px] text-sm leading-none font-bold uppercase text-[#204E4B] px-2 py-2 cursor-pointer">OA Tesla Buy</li>
                    <li onClick={() => { setSelectedShare("OA_Apple"); setIsShareDropdownOpen(false) }} className="font-inter sm:text-[15px] text-sm leading-none font-bold uppercase text-[#204E4B] px-2 py-2 cursor-pointer">OA Apple Buy</li>
                    <li onClick={() => { setSelectedShare("OA_Amazon"); setIsShareDropdownOpen(false) }} className="font-inter sm:text-[15px] text-sm leading-none font-bold uppercase text-[#204E4B] px-2 py-2 cursor-pointer">OA Amazon Buy</li>
                  </ul>
                )}
              </div>
              <div className="w-full">
                <div className="border-[2px] sm:border-t-[2px] border-t-0 border-[#15413F] flex">
                  <div className="flex w-full">
                    <div className="flex items-center min-h-[50px] justify-center w-full sm:px-0 px-2">
                      <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#679877] sm:text-left text-center">
                        Total Units Closed :
                      </h4>
                      <h4 className="font-inter font-extrabold sm:text-[18px] text-sm leading-none uppercase text-[#204E4B]  sm:text-left text-center">
                        &nbsp; {currentData.totalUnits} Units @ P/L {currentData.profitLoss}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  {currentData.transactions.map((transaction, index) => {
                    const parts = transaction.timestamp.split(" ")
                    const datePart = parts[0] || ""
                    const timePart = parts[1] || ""
                    return (
                      <div key={index} className="sm:flex w-full items-start">
                        <div className="sm:flex sm:w-[70%] w-full sm:shadow-lg">
                          <div className={`border-[2px] sm:border-r-0 border-r-2 ${index === 0 ? 'border-t-0' : ''} border-[#15413F] p-3 flex items-center justify-center`}>
                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                              {selectedShare.split('_')[1]} Close
                            </h4>
                          </div>
                          <div className={`w-full border-[2px] ${index !== 0 ? 'sm:border-t-[2px] border-t-0' : 'border-t-0'}  border-[#15413F] flex items-center justify-center space-y-2 py-2`}>
                           <div className='flex gap-3'>
                           <div className='flex items-center'>
                           <input
                              type="text"
                              defaultValue={`${transaction.units}`}
                              className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] text-center bg-transparent focus:outline-none w-10"
                            />
                            <h4
                              className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] text-center bg-transparent focus:outline-none w-10"
                            
                            >Units</h4>
                           </div>
                            <div className="flex gap-2 w-full">
                              <input
                                type="date"
                                defaultValue={datePart}
                                className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] text-center bg-transparent focus:outline-none w-1/2"
                              />
                              <input
                                type="time"
                                defaultValue={timePart}
                                className="font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] text-center bg-transparent focus:outline-none w-1/2"
                              />
                            </div>
                           </div>
                          </div>
                        </div>
                        <div className="sm:w-[30%] w-full shadow-lg">
                          <div className={`flex items-center ${index !== 0 ? 'sm:border-t-[2px] border-t-0' : ''} border-r-[2px] border-[#15413F]`}>
                            <div className="border-r-[2px] sm:border-l-0 border-l-[2px] border-[#15413F] p-3 flex items-center justify-center">
                              <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                                {selectedShare.split('_')[1]} Profit & Loss
                              </h4>
                            </div>
                            <div className="w-[50%] flex items-center justify-center">
                              <input
                                type="text"
                                defaultValue={transaction.percentage}
                                className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B] text-center py-2 bg-transparent focus:outline-none w-full"
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="flex justify-end w-full">
                              <h2 className="bg-[#BF0001] w-full text-center text-white text-base font-normal font-inter uppercase">
                                Closed
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  <div className="mt-5">
                    <button className="bg-[#31685B] hover:bg-[#25544a] text-white w-full py-3 uppercase font-inter text-lg text-center rounded-md transition-colors">
                      View all closed trades
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionHistory
