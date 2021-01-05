import React from 'react';
import './scss/style.scss';

const Contact = () => {
    return (
        <div className="video-join-section section overlay-gradient overlay-opacity-70 pt-85 pb-100" style={{ backgroundImage: 'url(assets/contact_img/bg/video-join.jpg)' }}>
            <div className="container">
                <div className="row flex-row-reverse">

                    {/* <!-- Join Form Start --> */}
                    <div className="join-form col-xl-5 col-lg-6 col-12">

                        {/* <!-- Join Form Wrapper Start --> */}
                        <div className="join-form-wrapper">

                            <h2>Get your seat Now, There is Limitations.</h2>
                            <p>This place is free for you to reachers your business with Skill Business Man.</p>

                            {/* <!-- Form Start --> */}
                            <form action="#" id="join-form" className="row">

                                <div className="col-12"><input type="text" placeholder="Name*" /></div>
                                <div className="col-12"><input type="email" placeholder="Email*" /></div>
                                <div className="col-12"><textarea placeholder="Message"></textarea></div>
                                <div className="col-12">
                                    <button className="btn btn-blue-outline btn-hover-red-outline">join us</button>

                                    {/* <!-- Extra Info --> */}
                                    <div className="extra-info fix">
                                        <p>Need any Help?</p>
                                        <h5>Call us: <span>+102 2235 2223</span></h5>
                                    </div>

                                </div>

                            </form>
                            {/* <!-- Form End --> */}

                        </div>
                        {/* <!-- Join Form Wrapper End --> */}

                    </div>
                    {/* <!-- Join Form End --> */}

                    {/* <!-- Video Content Start --> */}
                    <div className="video-content col-xl-7 col-lg-6 col-12">

                        <h1>Biggest Business Meetup Get Your Business Idea!</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <a href="https://www.youtube.com/watch?v=kuceVNBTJio" className="play-video video-popup"> <img src="img/icons/play-white.png" alt="play" /> <span>Play This Video</span> </a>

                    </div>
                    {/* <!-- Video Content End --> */}

                </div>
            </div>
        </div>
    )
}

export default Contact
