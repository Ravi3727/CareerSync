import React from 'react';
import './JobSeekerProfile.css';
import CardSwiper from './Swiper';
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import HDWallpaper from "../../assets/HD-wallpaper-cool-anime-boy-mirror-selfie-animation.jpg"
import { FaSuitcase } from "react-icons/fa";
import { BsAirplaneEngines } from "react-icons/bs";
const JobSeekerProfile = () => {
    return (
        <div>
            <header id="body-header">
                <nav>
                    <div id="name-social-container">
                        <div className="text-center">
                            <h1 id="my-name">Your Name</h1>
                        </div>
                        <ul className="horizontal-list text-center mx-auto social-icons">
                            <li ><a href="#" className='text-3xl'>  <FaInstagramSquare /> </a></li>
                            <li ><a href="#" className='text-3xl'>< FaLinkedin /></a></li>
                            <li ><a href="#" className='text-3xl'>< FaSquareXTwitter /></a></li>
                            <li ><a href="#" className='text-3xl'>< FaFacebookSquare /></a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <section id="about">
                <div id="my-image">
                    <img src={HDWallpaper} alt="Selfie" />
                </div>
                <p id="first_p">
                    Lorem Ipsum is simply dummy text of the printing and <span>typesetting industry</span>.
                    Lorem Ipsum has been the industry&apos;s standard <span>dummy text ever</span> since
                    the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.
                </p>
            </section>

            <main>
                <section id="skills">
                    <h1 className="section-heading">
                        <div className='flex gap-4 p-2 text-4xl'><FaCode />
                        <span>Skills</span></div>
                    </h1>
                    <div className='w-10/12  mx-auto items-center justify-center h-48'>
                        <CardSwiper />
                    </div>
                </section>

                <section id="education">
                    <h1 className="section-heading">
                        
                        <div className='flex gap-4 p-2 text-4xl mt-4'>
                        <MdOutlineCastForEducation />
                        <span>Education</span>
                        </div>
                    </h1>
                    <div className="timeline">
                        <div className="timeline-box">
                            <p className="timeline-text">
                                1. Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry.
                                Lorem Ipsum has been<br /> the industry&apos;s standard dummy<br /> text ever since
                                the 1500s, when an<br /> unknown printer took a gallery<br /> of type and
                                scrambled it.
                            </p>
                        </div>
                        <div className="timeline-box">
                            <p className="timeline-text">
                                2. Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry.
                                Lorem Ipsum has been<br /> the industry&apos;s standard dummy<br /> text ever since
                                the 1500s, when an <br />unknown printer took a gallery<br /> of type and
                                scrambled it.
                            </p>
                        </div>
                        <div className="timeline-box">
                            <p className="timeline-text">
                                3. Lorem Ipsum is simply dummy  of the printing and typesetting<br /> industry.
                                Lorem Ipsum has been<br /> the industry&apos;s standard dummy<br /> text ever since
                                the 1500s, when an <br />unknown printer took a gallery<br /> of type and
                                scrambled it.
                            </p>
                        </div>
                        <div className="timeline-box">
                            <p className="timeline-text">
                                4. Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry.
                                Lorem Ipsum has been<br /> the industry&apos;s standard dummy<br /> text ever since
                                the 1500s, when an<br /> unknown printer took a gallery<br /> of type and
                                scrambled it.
                            </p>
                        </div>
                        <div className="timeline-divider">
                            <div className="timeline-traveller">
                                <i id="aeroplane" className="fa-solid fa-plane"><BsAirplaneEngines /></i>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience">
                    <h1 className="section-heading">
                        <div className='flex gap-4 p-2 text-4xl mt-4'>
                        <FaSuitcase/>
                        <span>Work Experience</span>
                        </div>
                    </h1>
                    <div className="timeline">
                        <div className="timeline-box">
                            <p className="timeline-text">
                                1. Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry.
                                Lorem Ipsum has been<br /> the industry&apos;s standard dummy<br /> text ever since
                                the 1500s, when an<br /> unknown printer took a gallery<br /> of type and
                                scrambled it.
                            </p>
                        </div>
                        <div className="timeline-box">
                            <p className="timeline-text">
                                2. Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry.
                                Lorem Ipsum has been<br /> the industry&apos;s standard dummy<br /> text ever since
                                the 1500s, when an <br />unknown printer took a gallery<br /> of type and
                                scrambled it.
                            </p>
                        </div>
                        <div className="timeline-box">
                            <p className="timeline-text">
                                3. Lorem Ipsum is simply dummy  of the printing and typesetting<br /> industry.
                                Lorem Ipsum has been<br /> the industry&apos;s standard dummy<br /> text ever since
                                the 1500s, when an <br />unknown printer took a gallery<br /> of type and
                                scrambled it.
                            </p>
                        </div>
                        <div className="timeline-box">
                            <p className="timeline-text">
                                4. Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry.
                                Lorem Ipsum has been<br /> the industry&apos;s standard dummy<br /> text ever since
                                the 1500s, when an<br /> unknown printer took a gallery<br /> of type and
                                scrambled it.
                            </p>
                        </div>
                        <div className="timeline-divider">
                            <div className="timeline-traveller">
                                <i id="aeroplane" className="fa-solid fa-plane" ><BsAirplaneEngines /></i>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="jobs-app" className=''>
                    <h1 className="section-heading">
                    <div className='flex gap-4 p-2 text-4xl mt-4'>
                        <FaSuitcase/>
                        <span>Job Applied</span>
                        </div>
                    </h1>
                    <div className='w-10/12  mx-auto items-center justify-center h-48'>
                        <CardSwiper />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default JobSeekerProfile;
