
import ContactCard from "./ContactCard";

export default function ContactSection() {

  return (

    <section id="contact" className="container p-8 mx-auto max-w-screen-xl">
      <div className="flex flex-col space-y-4">
        <h2 className='text-md font-medium tracking-tight text-gray-800 dark:text-gray-100'>Services We Offer</h2>
       
      </div>

      <div className="flex mx-auto">
        <div className="grid max-w-screen-xs grid-rows-1 gap-6 mx-auto my-10 sm:grid-cols-2">

          <ContactCard />

        </div>
      </div>
    </section>

  );
}
