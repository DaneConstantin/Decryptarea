
import Hero from "../reusableComponents/homepageElements/Hero";
import FeaturedTemplates from "../reusableComponents/homepageElements/TemplateSection/FeaturedTemplates";
import ContactSection from "../reusableComponents/homepageElements/ContactSection/ContactSection";
import HomeWidget from "../reusableComponents/homepageElements/NewsSection/NewsWidget";
import GuidesWidget from "../reusableComponents/homepageElements/GuideSection/GuidesWidget";
// import ServiceSection from "../reusableComponents/homepageElements/ServiceSection/ServiceSection";

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
      <HomeWidget />
      <FeaturedTemplates />
      <GuidesWidget />
      {/* <ServiceSection /> */}
      <ContactSection />

    </main >
  );
}
