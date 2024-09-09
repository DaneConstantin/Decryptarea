import Link from "next/link";
import Container from "../Container";

import { EasyCustomizable, LightningFast } from "../../../../public/img/generalSVGgIcons";
import Image from "next/image";

const Buttons = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">

      <Link href="/templates" className="p-3 px-4 rounded-xl bg-gradient-to-b from-[#131415] to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33]">


        <span className='text-[#f0f0f0] text-sm leading-normal'>Explore All Templates</span>

      </Link>

      <Link className="p-3 px-4 rounded-xl bg-gradient-to-b from-[#131415] to-[#050505] border border-[#ffffff1a] hover:border-[#ffffff33]" href="/components">
        <span className='text-[#f0f0f0] text-sm leading-normal'>Browse Components Library</span>
      </Link>
    </div>
  )
}

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center z-10 relative">
        <div className="self-center max-w-6xl md:py-4 md:mx-10">
          <div className="flex gap-3 justify-center">
            <p className="text-sm ">Created by </p>
            <div className="relative rounded-full aspect-square h-6 w-6">
              <Image src="/img/Xpro.png" className="rounded-full" alt="Profile image of DCoder"
                fill
              />
            </div>
            <Link href="https://x.com/ethicoder" target="_blank" className="text-sm  text-indigo-500  ">DCoder</Link>
          </div>


          <h1 className="my-8 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-100">Full-Stack Templates and Components</h1>

          <div>
            <p className="max-w-md mx-auto my-4 text-base text-[#999] font-normal md:leading-relaxed  dark:text-gray-400 text-center">
              Explore a collection of premium, hand-crafted templates built to elevate your web projects.
            </p>
          </div>

          <Buttons />
        </div>


        <div id="stack" className="my-8">
          
          <div className="flex gap-4 justify-center mt-8">
            <div className="flex gap-2 align-middle">
              <LightningFast />
              <p className='text-sm text-center font-medium tracking-tight leading-normal text-[#999]'>Lightning Fast</p>
            </div>
            <div className="flex gap-2 align-middle">
              <EasyCustomizable />
              <p className='text-sm text-center font-medium tracking-tight leading-normal text-[#999]'>Easily Customizable</p>
            </div>

          </div>


        </div>


      </div>
    </Container>
  );
}
