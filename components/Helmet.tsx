import Head from "next/head";

const Helmet = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Martian+Mono&display=swap" rel="stylesheet" />
  </Head>
);

export default Helmet;
