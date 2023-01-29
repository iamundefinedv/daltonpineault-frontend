import React from "react";
import Link from "next/link";

export default () => {
    return (<>
        <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0"><span className="footer-text">&copy; 2023 daltonpineault.dev</span> </p>

                <ul className="nav col-md-4 justify-content-end ">
                    <li className="nav-item"><Link href="/" className="nav-link px-2 footer-text">Home</Link></li>
                    <li className="nav-item"><Link href="/#work" className="nav-link px-2 footer-text">Projects</Link></li>
                    <li className="nav-item"><Link href="/blog" className="nav-link px-2 footer-text">Blog</Link></li>
                    <li className="nav-item"><Link href="/#about" className="nav-link px-2 footer-text">About</Link></li>
                    <li className="nav-item"><Link href="/#contact" className="nav-link px-2 footer-text">Contact</Link></li>
                </ul>
            </div></div>
    </>);
};