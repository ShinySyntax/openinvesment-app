import Navbar from "../components/Navbar";
import logo from "../asset/logo.svg";
import coinGeko from "../asset/coin-geko.png";
import dex from "../asset/dex.png";
import facebook from "../asset/facebook.png";
import icpSwap from "../asset/icp-swap.png";
import icpTokens from "../asset/icp-tokens.png";
import kongSwap from "../asset/kong-swap.png";
import pdf from "../asset/pdf.png";
import social1 from "../asset/social1.png";
import telegram from "../asset/telegram.png";
import twitter from "../asset/twitter.png";

const Guide = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#123a38] to-[#86ba8e]">
        <div className="sm:w-[85%] w-[95%] xl:mt-0 mt-5 mx-auto bg-white rounded-3xl border border-[#6EA280]">
          <div className="flex items-center border-b-[2.5px] border-[#15413F]">
            <div className="sm:w-[20%] w-[35%] sm:px-0 px-3 py-5 border-r-[2.5px] border-[#15413F] flex justify-center items-center ">
              <img src={logo} className="sm:w-[50%] w-[80%]" alt="" />
            </div>
            <div className="pl-4">
              <h3 className="font-inter sm:text-3xl text-base font-bold leading-none uppercase text-[#8ABD90]">
                <span className="text-[#15413F]">C</span>ontact <span className="text-[#15413F]">&</span>
                <br />
                <span className="text-[#15413F]">I</span>nformation
              </h3>
            </div>
          </div>

          <div className="sm:p-8 p-4">
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-5">
              <div className="border-[1.5px] border-[#15413F]  shadow-2xl rounded-2xl bg-white">
                <div className="sm:py-5 py-3 flex justify-center items-center border-b-[1.5px] border-[#15413F]">
                  <h3 className="font-inter sm:text-3xl text-xl font-bold uppercase text-[#15413F] xl:text-left text-center">
                    Listed Exchanges
                  </h3>
                </div>
                <div className="py-5 px-4 flex flex-col gap-3 rounded-xl guide-scrollbar">
                  <a
                    href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=hdbec-7yaaa-aaaam-qcw5a-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={icpSwap} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        icp swap exchange
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://www.kongswap.io/swap?to=hdbec-7yaaa-aaaam-qcw5a-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={kongSwap} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        kong swap exchange
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=hdbec-7yaaa-aaaam-qcw5a-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={icpSwap} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        icp swap exchange
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://www.geckoterminal.com/icp/pools/lcqm7-2qaaa-aaaag-qnekq-cai?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={coinGeko} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        coin geko exchange
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=hdbec-7yaaa-aaaam-qcw5a-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={icpSwap} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        icp swap exchange
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://www.kongswap.io/swap?to=hdbec-7yaaa-aaaam-qcw5a-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={kongSwap} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        kong swap exchange
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="border-[1.5px] border-[#15413F] shadow-2xl rounded-2xl bg-white">
                <div className="sm:py-5 py-3 flex justify-center items-center border-b-[1.5px] border-[#15413F]">
                  <h3 className="font-inter sm:text-3xl text-xl font-bold uppercase text-[#15413F] xl:text-left text-center">
                    Listed Exchanges
                  </h3>
                </div>
                <div className="py-5 px-4 flex flex-col gap-3 rounded-xl guide-scrollbar">
                  <a
                    href="https://dexscreener.com/icp/lcqm7-2qaaa-aaaag-qnekq-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={dex} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        Dex Screener
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://icptokens.net/token/hdbec-7yaaa-aaaam-qcw5a-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={icpTokens} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        ICP Tokens
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=hdbec-7yaaa-aaaam-qcw5a-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={icpSwap} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        ICP Swap Pro
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://icptokens.net/token/hdbec-7yaaa-aaaam-qcw5a-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={icpTokens} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        ICP Tokens
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://dexscreener.com/icp/lcqm7-2qaaa-aaaag-qnekq-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={dex} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold uppercase text-[#15413F]">
                        Dex Screener
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex sm:gap-5 sm:justify-start justify-between">
                <div className="border-[1.5px] border-[#15413F] shadow-lg rounded-lg bg-white">
                  <div className="sm:py-5 py-3 flex justify-center items-center border-b-[1.5px] border-[#15413F]">
                    <h3 className="font-inter sm:text-3xl text-xl font-bold uppercase text-[#15413F] xl:text-left text-center">
                      PDF
                    </h3>
                  </div>
                  <div className="px-4 py-8 space-y-3 min-h-[280px]">
                    <div className="flex items-center gap-3">
                      <img className="min-w-[15%]" src={pdf} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold capitalize text-[#15413F]">
                        White Paper
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="min-w-[15%]" src={pdf} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold capitalize text-[#15413F]">
                        How to invest
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="min-w-[15%]" src={pdf} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold capitalize text-[#15413F]">
                        How it works
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="min-w-[15%]" src={pdf} alt="" />
                      <h4 className="font-inter text-[18px] leading-none font-bold capitalize text-[#15413F]">
                        ICP Network
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="sm:w-[40%] w-[35%] border-[1.5px] border-[#15413F] shadow-lg rounded-lg bg-white">
                  <div className="sm:py-5 py-3 flex justify-center items-center border-b-[1.5px] border-[#15413F]">
                    <h3 className="font-inter sm:text-3xl text-xl font-bold uppercase text-[#15413F] xl:text-left text-center">
                      Social
                    </h3>
                  </div>
                  <div className="px-5 py-8 flex items-center flex-col w-full space-y-3 rounded-xl min-h-[280px]">
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={social1} alt="" />
                    </div>
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={telegram} alt="" />
                    </div>
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={twitter} alt="" />
                    </div>
                    <div className="flex items-center gap-5">
                      <img className="min-w-[23%]" src={facebook} alt="" />
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

export default Guide;
