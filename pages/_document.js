import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>

                        <title>Space Dynamic - SEO HTML5 Template</title>
                </Head>
                <body>
                <Main />
                <NextScript />

                <Script src="vendor/jquery/jquery.min.js"/>
                <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"/>
                <Script src="assets/js/owl-carousel.js"/>
                <Script src="assets/js/animation.js"/>
                <Script src="assets/js/imagesloaded.js"/>
                <Script src="assets/js/templatemo-custom.js"/>

                </body>
            </Html>
    )
    }
    }

    export default MyDocument
