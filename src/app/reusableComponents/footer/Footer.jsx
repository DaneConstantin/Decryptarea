import Container from "../Container";
import CopyRightAndLinks from "./CopyrightAndLinks";
import FooterMenu from "./FooterMenu";



export default function Footer() {
    return (
        <>
            <footer id="nextFooter" className="bg-primary-dark border-t-[1px] border-gray-200 dark:border-[#ffffff1a]">
                <Container>
                    <div className="max-w-[1440px] pt-10 pb-5 lg:pt-20 mx-auto  ">
                        <FooterMenu />

                    </div>
                </Container>
            </footer>
            <div id="nextFooterBottom" className=" border-t-[1px] border-gray-200 dark:border-[#ffffff1a]">

                <CopyRightAndLinks />
            </div>
        </>
    );
};

