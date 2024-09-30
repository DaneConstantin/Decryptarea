
import Container from "../../Container";
import ContactCard from "./ContactCard";

export default function ContactSection() {

  return (
    <section id="contact" className="bg-white dark:bg-primary-dark border-t-[1px] border-gray-200 dark:border-[#ffffff1a]">
      <Container className="py-8 max-w-screen-xl xl:px-5 px-4 md:px-8">

        <div className="flex flex-col space-y-4">
          <h2 className='text-md font-medium tracking-tight text-gray-800 dark:text-gray-100'>Contact</h2>

        </div>

        <div className="flex mx-auto">
          <div className="grid max-w-screen-xs grid-rows-1 gap-6 mx-auto my-10 sm:grid-cols-2">

            <ContactCard />

          </div>
        </div>
      </Container >
    </section>

  );
}
