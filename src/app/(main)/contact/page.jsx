import Container from "../../reusableComponents/Container";
import Link from "next/link";


export default function ContactPage() {

  return (
    <>
      <Container>
        <div className="mx-4 flex flex-wrap lg:justify-between py-16 mt-20">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className="mb-6 text-[32px] font-bold  sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Get in Touch
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:-6">
                If you have any questions or need assistance with my templates and components, feel free to reach out. I am here to help!
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19ZM183.53,208,100.85,135.5l119-85.29Z">
                    </path>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold dark:text-[#f0f0f0]">
                    Telegram
                  </h4>
                  <Link target="_blank" href="https://t.me/" className="text-base text-indigo-500">
                   
                  </Link>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold">
                    Email Address
                  </h4>
                  <p className="text-base text-indigo-500">
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </Container >

    </>
  );
};

