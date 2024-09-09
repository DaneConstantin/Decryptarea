
import Hero from "../reusableComponents/homepageElements/Hero";
import FeaturedTemplates from "../reusableComponents/homepageElements/FeaturedTemplates";
import ContactSection from "../reusableComponents/homepageElements/ContactSection";

export default function Home() {

  return (

    <main className='flex flex-grow flex-col shrink-0 basis-auto'>
      <header className="pb-8 pt-24 flex flex-col w-full relative h-auto border-b-[1px] border-gray-200 dark:border-[#ffffff1a]">
        <Hero />
        <div className="topGradient">
        </div>
        <div className="darkGradientBg">
        </div>
      </header>
      <FeaturedTemplates />


      <ContactSection />
     
    </main >
  );
}
