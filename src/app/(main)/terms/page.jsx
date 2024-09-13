import Link from 'next/link';
import React from 'react';
import { FaCheck, FaXmark } from 'react-icons/fa6';

const TermsAndConditions = () => {


    return (
        <div className="my-40 max-w-3xl mx-auto">
            <h1 className='text-6xl font-extrabold'>Terms & License</h1>
            <p className='text-slate-500 italic mt-2'><strong>Latest update:</strong> June 1, 2024</p>
            <section className='mt-8'>
                <h2 className="text-2xl  font-extrabold my-4">Welcome to DecryptArea.com</h2>
                <p className='mb-4 text-lg'>These terms and conditions outline the rules and regulations for the use of  DecryptArea&apos;s Website at  DecryptArea.com.</p>

                <p className='mb-4 text-lg'> By accessing this website we assume you accept these terms and conditions. Do not continue to use  DecryptArea.com if you do not agree to take all of the terms and conditions stated on this page.</p>
                <h2 className="text-2xl  font-extrabold my-4">Cookies</h2>
                <p className='mb-4 text-lg'>We employ the use of cookies. By accessing DecryptArea.com, you agreed to use cookies in agreement with the DecryptArea&apos;s Privacy Policy.</p>

                <p className='mb-4 text-lg'> By accessing this website we assume you accept these terms and conditions. Do not continue to use  DecryptArea.com if you do not agree to take all of the terms and conditions stated on this page.</p>
            </section>
            <section className='mt-8'>
                <h2 className="text-2xl  font-extrabold my-4">Licensing Agreement</h2>
                <p className='mb-4 text-lg'>DecryptArea grants you an ongoing, non-exclusive, right to make use of the Templates you have purchased or downloaded.</p>

                <p className='mb-4 text-lg'>You are licensed to use the Templates and Components to create unlimited End Products for yourself or your clients.</p>
            </section>
            <p className='mb-4 text-lg'>Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

            <h2 className="text-2xl  font-extrabold my-4">What You Can Do:</h2>
            <ul className="gap-8 space-y-6 my-6 text-lg">
                <li><FaCheck style={{ display: "inline", marginRight: "8px", color: 'green' }} size={24} />Use the Templates to create unlimited End Products for your personal and commercial projects.</li>
                <li><FaCheck style={{ display: "inline", marginRight: "8px", color: 'green' }} size={24} />Use the Templates to create unlimited End Products for your client projects.</li>
                <li><FaCheck style={{ display: "inline", marginRight: "8px", color: 'green' }} size={24} />Combine the Template with other works and make a derivative work from it. The resulting works are subject to the terms of this license.</li>
            </ul>

            <h2 className="text-2xl  font-extrabold my-4">What You Cannot Do:</h2>
            <ul className="gap-8 space-y-6 my-6 text-lg">
                <li> <FaXmark style={{ display: "inline", marginRight: "8px", color: 'red' }} size={24} />Use the Templates in any application allowing an End User to customize the Template, like “website builders” or “theme generators”.</li>
                <li> <FaXmark style={{ display: "inline", marginRight: "8px", color: 'red' }} size={24} />Host, resell or re-distribute the Templates or derivatives of the Templates.</li>
                <li> <FaXmark style={{ display: "inline", marginRight: "8px", color: 'red' }} size={24} />Share your access to the Templates with any other individuals.</li>
            </ul>
            <hr className='my-8' />
            <h2 className="text-2xl  font-extrabold my-4">Example Usage:</h2>
            <p className='mb-4 text-lg'><strong>Allowed by the license:</strong></p>
            <ul className="gap-8 space-y-6 my-6 text-lg">
                <li><FaCheck style={{ display: "inline", marginRight: "8px", color: 'green' }} size={24} />You can create unlimited personal/commercial websites or landing pages for yourself.</li>
                <li><FaCheck style={{ display: "inline", marginRight: "8px", color: 'green' }} size={24} />You can create unlimited websites or landing pages for your clients, and charge them for your services.</li>
            </ul>

            <p className='mb-4 text-lg'><strong>Not allowed by the license:</strong></p>
            <ul className="gap-8 space-y-6 my-6 text-lg">
                <li><FaXmark style={{ display: "inline", marginRight: "8px", color: 'red' }} size={24} />You cannot create a theme or template that anyone can download for sale or for free using the Templates or derivatives of the Templates from DecryptArea.com.</li>
                <li><FaXmark style={{ display: "inline", marginRight: "8px", color: 'red' }} size={24} />You cannot create a &quot;landing page&quot; or &quot;website builder&quot; app where End Users can build their own websites/landing pages using Templates or derivatives of the Templates from DecryptArea.com.</li>
            </ul>
            <hr className='my-8' />

            <section>
                <h2 className="text-2xl  font-extrabold my-4">Purchases</h2>
                <p className='mb-4 text-lg'>All payments are processed securely through our Payment Gateway Provider Lemon Squeezy. DecryptArea does not directly process payments through the website.</p>
                <p className='mb-4 text-lg'> All products are 100% digital and delivered electronically to your email by the Payment Gateway Provider.</p>
                <p className='mb-4 text-lg'>DecryptArea is not responsible for you not receiving your Template if you fail to provide a valid email or for technical issues outside our control.</p>
            </section>
            <hr className='my-8' />
            <section>
                <h2 className="text-2xl  font-extrabold my-4">Refunds</h2>
                <p className='mb-4 text-lg'>You have 14 days to evaluate your purchase. If your purchase fails to meet expectations, or is critically flawed in some way, contact DecryptArea and we will issue a full refund pending a review.</p>

                <p className='mb-4 text-lg'>The issue of refunds is at the complete discretion of DecryptArea.</p>
            </section>

            <hr className='my-8' />
            <section>
                <h2 className="text-2xl  font-extrabold my-4">Support</h2>
                <p className='mb-4 text-lg'>DecryptArea provides support for any customers.</p>
                <p className='mb-4 text-lg'>Support for a purchase is governed by the usage license stated in the Terms stated above</p>
                <p className='mb-4 text-lg'>Support is valid from the date of purchase and all inquiries should be directed to <Link href="mailto:contact@DecryptArea.com" className="text-blue-500 hover:underline">contact@DecryptArea.com</Link></p>
            </section>
            <hr className='my-8' />
            <section>
                <h2 className="text-2xl  font-extrabold my-4">Changes</h2>
                <p className='mb-4 text-lg'>DecryptArea may modify this agreement at any time. Continued use of DecryptArea.com signifies acceptance of these changes.</p>
            </section>

            <p className='mb-4 text-lg'>If you have any questions, please contact us at <Link href="mailto:contact@DecryptArea.com" className="text-blue-500 hover:underline">contact@DecryptArea.com</Link></p>
        </div >
    );
};

export default TermsAndConditions;
