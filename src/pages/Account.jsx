import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import email from "../asset/email.png";
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
                <div className="xl:w-[85%] w-[95%] xl:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
                    <div className="flex items-center border-b-[2.5px] border-[#15413F]">
                        <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#15413F] flex justify-center items-center ">
                            <img src={logo} className="sm:w-[50%] w-[80%]" alt="" />
                        </div>
                        <div className="px-4 w-full flex justify-between items-center ">
                            <h3 className="font-inter sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]">
                                <span className="text-[#15413F]">W</span>allet <br />
                                <span className="text-[#15413F]">A</span>ccount
                            </h3>
                            <Link to={'/action-pro-mode'} className="bg-[#31685B] text-white sm:w-44 w-28 sm:py-3 py-2.5 uppercase font-inter sm:text-lg text-sm text-center rounded-md">
                                Pro Mode
                            </Link>
                        </div>
                    </div>
                    <div className="xl:px-16 sm:px-4 px-2">
                        <div className="flex sm:flex-row flex-col justify-between">
                            {/* Equity Section */}
                            <div className="sm:w-[50%] sm:py-10 py-5 sm:pb-10 pb-10 sm:border-r-[2px] border-[#15413F] sm:border-b-0 border-b-2">
                                <div className="text-[#296A5B] sm:text-lg text-sm leading-none mb-3 font-bold sm:px-5 px-2">
                                    Total Equity Shares Holding : $
                                    <input
                                        type="text"
                                        defaultValue="0.00"
                                        className="bg-transparent w-20 ml-2 font-bold focus:outline-none"
                                    />
                                </div>
                                <div className="account-scrollbar sm:px-5 px-2 pb-4">
                                    {/* Tesla Row */}
                                    <div className="flex w-full items-star shadow-xl">
                                        <div className="flex w-[90%]">
                                            <div className="sm:w-[55%] w-[60%] border-[2px] border-r-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                                                    Oa Tesla <br /> A<span className="text-[#8FC292]">mount</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-[#15413F]">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <input
                                                        type="text"
                                                        defaultValue="0.00"
                                                        className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[15%]">
                                            <div className="flex items-center min-h-full border-l-0 border-[2px] border-[#15413F]">
                                                <input
                                                    type="text"
                                                    defaultValue="+0%"
                                                    className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center ml-[10%] mt-1">
                                        <span className="font-bold text-[#528067] text-[9px] uppercase">
                                            Total USD live equity share value: $
                                            <input
                                                type="text"
                                                defaultValue="0.00"
                                                className="bg-transparent focus:outline-none w-12 ml-1 text-[9px]"
                                            />
                                        </span>
                                    </div>

                                    {/* Microsoft Row */}
                                    <div className="flex w-full items-star sm:mt-4 mt-3 shadow-xl">
                                        <div className="flex w-[90%]">
                                            <div className="sm:w-[55%] w-[60%] border-[2px] border-r-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                                                    {/* Oa Microsoft */}
                                                    Oa Microsoft <br /> A<span className="text-[#8FC292]">mount</span>

                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-[#15413F]">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <input
                                                        type="text"
                                                        defaultValue="0.00"
                                                        className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[15%]">
                                            <div className="flex items-center min-h-full border-l-0 border-[2px] border-[#15413F]">
                                                <input
                                                    type="text"
                                                    defaultValue="+0%"
                                                    className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center ml-[10%] mt-1">
                                        <span className="font-bold text-[#528067] text-[9px] uppercase">
                                            Total USD live equity share value: $
                                            <input
                                                type="text"
                                                defaultValue="0.00"
                                                className="bg-transparent focus:outline-none w-12 ml-1 text-[9px]"
                                            />
                                        </span>
                                    </div>

                                    {/* IBM Row */}
                                    <div className="flex w-full items-star sm:mt-4 mt-3 shadow-xl">
                                        <div className="flex w-[90%]">
                                            <div className="sm:w-[55%] w-[60%] border-[2px] border-r-0 border-[#15413F] p-3">
                                                <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                                                    AO IBM <br /> A<span className="text-[#8FC292]">mount</span>
                                                </h4>
                                            </div>
                                            <div className="w-full border-[2px] border-[#15413F]">
                                                <div className="flex items-center min-h-full justify-center">
                                                    <input
                                                        type="text"
                                                        defaultValue="0.00"
                                                        className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[15%]">
                                            <div className="flex items-center min-h-full border-l-0 border-[2px] border-[#15413F]">
                                                <input
                                                    type="text"
                                                    defaultValue="+0%"
                                                    className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center ml-[10%] mt-1">
                                        <span className="font-bold text-[#528067] text-[9px] uppercase">
                                            Total USD live equity share value: $
                                            <input
                                                type="text"
                                                defaultValue="0.00"
                                                className="bg-transparent focus:outline-none w-12 ml-1 text-[9px]"
                                            />
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 sm:px-5 px-2">
                                    <button className="bg-[#31685B] text-white w-full sm:py-3 py-2.5 uppercase font-inter sm:text-lg text-sm text-center rounded-md">
                                        View all
                                    </button>
                                </div>
                            </div>

                            {/* Digital Section */}
                            <div className="sm:w-[50%] sm:py-10 py-5 sm:px-5 sm:mt-0 mt-3">
                                <div className="text-[#296A5B] sm:text-lg text-sm leading-none mb-3 font-bold sm:px-0 px-2">
                                    Total Digital Shares Holding : $
                                    <input
                                        type="text"
                                        defaultValue="0.00"
                                        className="bg-transparent w-20 ml-2 font-bold focus:outline-none"
                                    />
                                </div>
                                <div className="account-scrollbar sm:px-5 px-2 pb-4">

                                {/* Open App Row */}
                                <div className="flex w-full items-start shadow-xl">
                                    <div className="flex w-[100%]">
                                        <div className="sm:w-[34.5%] w-[40%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                                                Open App <br /> A<span className="text-[#8FC292]">mount</span>
                                            </h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F]">
                                            <div className="flex items-center min-h-full justify-center">
                                                <input
                                                    type="text"
                                                    defaultValue="0"
                                                    className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-1">
                                    <span className="font-bold text-[#528067] text-[9px] uppercase">
                                        Total USD live digital value: $
                                        <input
                                            type="text"
                                            defaultValue="0.00"
                                            className="bg-transparent focus:outline-none w-12 ml-1 text-[9px]"
                                        />
                                    </span>
                                </div>

                                {/* ICP Row */}
                                <div className="flex w-full items-star sm:mt-4 mt-3 shadow-xl">
                                    <div className="flex w-[100%]">
                                        <div className="sm:w-[34.4%] w-[40%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                                                ICP <br /> A<span className="text-[#8FC292]">mount</span>
                                            </h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F]">
                                            <div className="flex items-center min-h-full justify-center">
                                                <input
                                                    type="text"
                                                    defaultValue="0"
                                                    className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-1">
                                    <span className="font-bold text-[#528067] text-[9px] uppercase">
                                        Total USD live digital value: $
                                        <input
                                            type="text"
                                            defaultValue="0.00"
                                            className="bg-transparent focus:outline-none w-12 ml-1 text-[9px]"
                                        />
                                    </span>
                                </div>

                                {/* Bitcoin Row */}
                                <div className="flex w-full items-star sm:mt-4 mt-3 shadow-xl">
                                    <div className="flex w-[100%]">
                                        <div className="sm:w-[34.4%] w-[40%] border-[2px] border-r-0 border-[#15413F] p-3">
                                            <h4 className="font-inter sm:text-[18px] text-sm leading-none font-bold uppercase text-[#204E4B]">
                                                CK BITCOIN <br /> A<span className="text-[#8FC292]">mount</span>
                                            </h4>
                                        </div>
                                        <div className="w-full border-[2px] border-[#15413F]">
                                            <div className="flex items-center min-h-full justify-center">
                                                <input
                                                    type="text"
                                                    defaultValue="0"
                                                    className="w-full text-center bg-transparent font-inter sm:text-[18px] text-sm leading-none font-bold text-[#204E4B] focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-1">
                                    <span className="font-bold text-[#528067] text-[9px] uppercase">
                                        Total USD live digital value: $
                                        <input
                                            type="text"
                                            defaultValue="0.00"
                                            className="bg-transparent focus:outline-none w-12 ml-1 text-[9px]"
                                        />
                                    </span>
                                </div>

</div>

                                <div className="mt-4 sm:px-5 px-2">
                                    <button className="bg-[#31685B] text-white w-full sm:py-3 py-2.5 uppercase font-inter sm:text-lg text-sm text-center rounded-md">
                                        View all
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;