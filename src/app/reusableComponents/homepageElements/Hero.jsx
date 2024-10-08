import Link from "next/link";
import Container from "../Container";
import { LuNewspaper, LuShoppingBag } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

const Buttons = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">

      <Link href="/guides" className="rounded-full border border-[#ffffff1a] border-gray-300 bg-gradient-to-br from-[#ffffff] to-[#e6e6e6] p-3 px-6 text-sm leading-normal text-black shadow-sm hover:border-[#ececec] hover:to-[#dfdfdf]">

        <LuNewspaper className="inline mr-2 h-5 w-5" />
        <span className='text-sm leading-normal'>Explore Guides</span>

      </Link>

      <Link className="rounded-full border border-[#ffffff1a] text-white border-gray-300 dark:border-purple-700 bg-gradient-to-br from-purple-700 to-purple-800 p-3 px-6 text-sm leading-normal  shadow-sm hover:border-[#ececec] dark:hover:border-purple-900 hover:to-purple-900" href="/templates">
        <LuShoppingBag className="inline mr-2 h-5 w-5" />
        <span className='text-sm leading-normal'>Browse Templates</span>
      </Link>
    </div>
  )
}

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center z-10 relative">
        <div className="self-center max-w-6xl md:py-4 md:mx-10">

          <h1 className="my-8 text-3xl font-bold md:text-4xl dark:text-gray-100">
            <span className="text-transparent bg-gradient-to-tr from-yellow-400 to-yellow-600 bg-clip-text">
              Decrypt -&nbsp;
            </span>

            <span className="text-transparent bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text">
              Develop -&nbsp;
            </span>

            <span className="text-transparent bg-gradient-to-tr from-yellow-400 to-yellow-600 bg-clip-text">
              Discover
            </span>
         
          </h1>

          <div>
            <p className="max-w-xl mx-auto my-4 text-base text-[#999] font-normal md:leading-relaxed  dark:text-gray-400 text-center">
              Premium Web3 resources, blockchain insights, cryptocurrency news. <br></br>Explore, learn, and build the decentralized future.
            </p>
          </div>

          <Buttons />
        </div>


        <div id="stack">
          <Link
            href="/about" className="flex gap-2 text-sm justify-center text-purple-500 dark:text-purple-200 items-center my-8">
            Learn more about our platform
            <FaArrowRight className=" h-5 w-5" />
          </Link>
        </div>



      </div>
    </Container >
  );
}
