
import Container from "../../Container";
import ContactCard from "./ContactCard";

export default function ContactSection() {

  return (
    <section id="contact" className="container p-8 mx-auto  py-8 max-w-screen-xl xl:px-5 px-4 md:px-8">
      <Container className="py-8 max-w-screen-xl xl:px-5 px-4 md:px-8">

        <div className="flex justify-left items-center gap-4">
          <h2 className='text-xl font-bold'>Contact</h2>

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
