import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


export default () => {

    useEffect(() => {
        const selectHeader = document.querySelector('#header');
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add('header-scrolled');
                } else {
                    selectHeader.classList.remove('header-scrolled');
                }
            };
            window.addEventListener('scroll', headerScrolled);
        }

        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', e => {

                const navbar = document.querySelector('#navbar');

                if (navbar) {
                    navbar.classList.toggle('navbar-mobile');
                    mobileToggle.classList.toggle('bi-list');
                    mobileToggle.classList.toggle('bi-x');
                    console.log('why?');
                }
            });
        }
    });

    return (<>
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link href="/"> <Image width={50} height={250} src={'/img/logo.png'} alt='' /> </Link></h1>

                <nav id="navbar" className="navbar">

                    <ul>
                        <li><Link className="nav-link scrollto" href="/">Home</Link></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto " href="#work">Work</a></li>
                        <li><a className="nav-link scrollto " href="#blog">Blog</a></li>
                        {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> */}
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    </>);
};