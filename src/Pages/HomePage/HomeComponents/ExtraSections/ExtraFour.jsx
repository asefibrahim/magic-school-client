import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Ex4.css'
import { FaPhoneAlt, FaInbox } from 'react-icons/fa';
import SectionTitle from '../../../../components/SectionTitle';
const ExtraFour = () => {
    return (
        <div>
            <SectionTitle heading={'Contact us'} subHeading={'Online only'}></SectionTitle>
            <section className='contact_us my-24 container mx-auto'>
                <div className="contact_content">
                    <div className="contact_title  h-96 relative">
                        <div className="absolute text-white title_heading text-center ">
                            <h2 className='text-3xl'>GET IN TOUCH</h2>
                            <p className='mt-2 text-white'>Want to get in touch? We'd love to hear you. Here's how you can reach us...</p>
                        </div>
                    </div>
                    <div className="contact_form grid grid-cols-1 md:grid-cols-2 justify-center md:mt-[-100px] relative z-0 mx-0 md:mx-16 gap-5 px-5 md:px-0">
                        <div data-aos-duration="1000" data-aos="flip-right" className="call p-10 bg-slate-900 shadow-2xl rounded text-center text-white ">
                            <p className='w-20 mx-auto ps-8 '>
                                <FaPhoneAlt className='my-8'></FaPhoneAlt>
                            </p>
                            <p className="text-sm font-bold my-3">Call To Talk Now</p>
                            <p className='text-sm my-3'>Interested in Job Onboard Services? Just pick up the phone to chat with a member of our Job Onboard team.</p>
                            <p className='text-blue-400'>+880 1700 000000</p>
                        </div>
                        <div data-aos-duration="1000" data-aos="flip-left"
                            className="connect p-10 bg-red-950 shadow-2xl rounded text-white  text-center">
                            <div className='flex justify-center'>
                                <p><FaInbox className='my-7'></FaInbox></p>
                            </div>
                            <p className="text-sm font-bold my-3">Contact Customer Support</p>
                            <p className='text-sm my-3'>Sometimes you need a little help from your friends. Or a Job Onboard Support rep. Don't worry... we're here for you.</p>
                            <Link to='/contact-us'>
                                <a
                                    class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]    text-white focus:outline-none focus:ring active:text-opacity-75 "

                                >
                                    <span
                                        class="block rounded-sm  px-8 py-3 text-sm font-medium bg-transparent"
                                    >
                                        Get Support
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraFour;