import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useEffect } from "react";
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default () => {

    useEffect(() => {
        new Swiper('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });

    }, []);

    return (<>
        <Navbar />
        <div className="hero hero-single route bg-image" style={{ backgroundImage: "url('../img/lionheart.png')" }}>
            <div className="overlay-mf"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h2 className="hero-title mb-4">LionheartGG</h2>
                        <ol className="breadcrumb d-flex justify-content-center">
                            <li className="breadcrumb-item">
                                <Link href='/'>Home</Link>
                            </li>
                            <li className="breadcrumb-item active">LionheartGG</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div >

        <main id="main">

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-8">
                            <div className="portfolio-details-slider swiper">
                                <div className="swiper-wrapper align-items-center">

                                    <div className="swiper-slide">
                                        <img src="/img/lh2.png" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/img/lh3.png" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/img/lh1.png" alt="" />
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li ><strong className="category">Category</strong>: Web Development / Wordpress</li>
                                    {/* <li><strong>Client</strong>: ASU Company</li> */}
                                    <li><strong className="date">Project date</strong>: 01 Jan, 2022</li>
                                    <li><strong className="link">Project URL</strong>: <a href="http://lionheartgg.com/">lionheartgg.com</a></li>
                                </ul>
                            </div>
                            <br />
                            <div className="portfolio-info">
                                <h3>eSports Organization</h3>
                                <p>
                                    LionheartGG is a video game organization focused on eSports. Their website was built using wordpress and woocommerce.
                                </p>
                                <Link href="/blog/lionheart" className="btn btn-warning">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>);
};