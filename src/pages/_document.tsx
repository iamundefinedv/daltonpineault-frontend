import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
        <meta name="description" content="I'm a software developer from Northern Ontario,I started learning Web Development in Spring of 2017 and never looked back since!" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

        <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="/vendor/typed.js/typed.min.js"></script>
        <script src="/vendor/php-email-form/validate.js"></script>
        <script src="/js/main.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
