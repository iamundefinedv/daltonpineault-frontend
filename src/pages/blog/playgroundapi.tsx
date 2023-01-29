import Navbar from "@/components/Navbar";
import React from "react";

export default () => {
    return (<>
        <Navbar />
        <div className="hero hero-single route bg-image" style={{ backgroundImage: "url('../img/lionheart.png')" }}>
            <div className="overlay-mf "></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h2 className="hero-title mb-4">Playground API</h2>
                        <ol className="breadcrumb d-flex justify-content-center">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Blog</a>
                            </li>
                            <li className="breadcrumb-item active">playgroundapi</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <main id="main">

            <section className="blog-wrapper sect-pt4" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="post-box box-shadow-full">
                                <div className="post-thumb">
                                    <img src="/img/playgroundapi.png" className="img-fluid" alt="" />
                                </div>
                                <div className="post-meta">
                                    <h1 className="article-title">Why Did I Build A Random API?</h1>
                                    <ul>
                                        <li>
                                            <span className="bi bi-person"></span>
                                            <a href="#">Dalton Pineault</a>
                                        </li>
                                        <li>
                                            <span className="bi bi-tag"></span>
                                            <a href="#">Web Development / Backend</a>
                                        </li>
                                        {/* <li>
                                            <span className="bi bi-chat-left-text"></span>
                                            <a href="#">14</a>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="article-content">
                                    <p>
                                        Lionheart is an American based eSports organization that was founded on mindset and goals of putting the needs of players
                                        first. Lionheart provides a safe sand constructive home for video game players of all levels to improvate their talent,
                                        knowledge, and experience. With over 300 of community members, lionheart is growing exponentially everyday.
                                    </p>
                                    <p>
                                        I started working with lionheart in Febuary of 2021 helping them with their graphics. During the beginning they were under the name 'Frontline' at
                                        and collectivly agreed on a rebrand to Lionheart. This was an awesome process to be apart of and I thank them for letting me experience their
                                        journey with them. Fast foward a year, Jason from lionheart reached out to me again asking for advice and help with his website. After some chatter
                                        back and forth, we agreed to go ahead and build lionheart a brand new website.

                                    </p>
                                    <p>
                                        Jason and I decided on using Wordpress for lionhearts website. The ability for the Lionheart staff to make slight modifications to his website was crucial.
                                        Using the woocommerce plugin, we were able to quickly and easily setup a small shop for Lionheart to sell their merch. Lionheart is always on the
                                        look out for new talent and staff, if your'e interested head over to their <strong> <a href="http://lionheartgg.com/apply/">website</a></strong> and take a look!
                                    </p>

                                    <p>
                                        Thank you to Jason, Isaak, and the Lionheart crew for allowing me to be apart of this journey with them. #StandTogether
                                    </p>
                                </div>
                            </div>
                            {/* <div className="box-comments">
                                <div className="title-box-2">
                                    <h4 className="title-comments title-left">Comments (34)</h4>
                                </div>
                                <ul className="list-comments">
                                    <li>
                                        <div className="comment-avatar">
                                            <img src="/img/testimonial-2.jpg" alt="" />
                                        </div>
                                        <div className="comment-details">
                                            <h4 className="comment-author">Oliver Colmenares</h4>
                                            <span>18 Sep 2017</span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                                                ipsam temporibus maiores
                                                quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet corporis.
                                            </p>
                                            <a href="3">Reply</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment-avatar">
                                            <img src="/img/testimonial-4.jpg" alt="" />
                                        </div>
                                        <div className="comment-details">
                                            <h4 className="comment-author">Carmen Vegas</h4>
                                            <span>18 Sep 2017</span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                                                ipsam temporibus maiores
                                                quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet corporis,
                                                veritatis deserunt.
                                            </p>
                                            <a href="3">Reply</a>
                                        </div>
                                    </li>
                                    <li className="comment-children">
                                        <div className="comment-avatar">
                                            <img src="/img/testimonial-2.jpg" alt="" />
                                        </div>
                                        <div className="comment-details">
                                            <h4 className="comment-author">Oliver Colmenares</h4>
                                            <span>18 Sep 2017</span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                                                ipsam temporibus maiores
                                                quae.
                                            </p>
                                            <a href="3">Reply</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment-avatar">
                                            <img src="/img/testimonial-2.jpg" alt="" />
                                        </div>
                                        <div className="comment-details">
                                            <h4 className="comment-author">Oliver Colmenares</h4>
                                            <span>18 Sep 2017</span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                                                ipsam temporibus maiores
                                                quae natus libero optio.
                                            </p>
                                            <a href="3">Reply</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="form-comments">
                                <div className="title-box-2">
                                    <h3 className="title-left">
                                        Leave a Reply
                                    </h3>
                                </div>
                                <form className="form-mf">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control input-mf" id="inputName" placeholder="Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <input type="email" className="form-control input-mf" id="inputEmail1" placeholder="Email *" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="url" className="form-control input-mf" id="inputUrl" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <textarea id="textMessage" className="form-control input-mf" placeholder="Comment *" name="message" cols={45} rows={8} required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                        <div className="col-md-4">
                            {/* <div className="widget-sidebar sidebar-search">
                                <h5 className="sidebar-title">Search</h5>
                                <div className="sidebar-content">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
                                            <span className="input-group-btn">
                                                <button className="btn btn-secondary btn-search" type="button">
                                                    <span className="bi bi-search"></span>
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                            <div className="widget-sidebar widget-tags box-shadow-full">
                                <h5 className="sidebar-title">Tags</h5>
                                <div className="sidebar-content">
                                    <ul>
                                        <li>
                                            <a href="#">Web</a>
                                        </li>
                                        <li>
                                            <a href="#">Wordpress</a>
                                        </li>
                                        <li>
                                            <a href="#">JavaScript</a>
                                        </li>
                                        <li>
                                            <a href="#">PHP</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-sidebar box-shadow-full">
                                <h5 className="sidebar-title">Other Posts</h5>
                                <div className="sidebar-content">
                                    <ul className="list-sidebar">
                                        <li>
                                            <a href="#">How To Build A Chat App In NodeJS</a>
                                        </li>
                                        <li>
                                            <a href="#">Why I Built A Random API & What I Used</a>
                                        </li>
                                        <li>
                                            <a href="#">My Journey As A Developer</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="widget-sidebar">
                                <h5 className="sidebar-title">Archives</h5>
                                <div className="sidebar-content">
                                    <ul className="list-sidebar">
                                        <li>
                                            <a href="#">September, 2017.</a>
                                        </li>
                                        <li>
                                            <a href="#">April, 2017.</a>
                                        </li>
                                        <li>
                                            <a href="#">Nam quo autem exercitationem.</a>
                                        </li>
                                        <li>
                                            <a href="#">Atque placeat maiores nam quo autem</a>
                                        </li>
                                        <li>
                                            <a href="#">Nam quo autem exercitationem.</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </section>

        </main>
    </>);
};