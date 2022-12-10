import Head from "next/head";

const Helmet = ({ title }) => {
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <link rel="shortcut icon" href="/favicon.ico" />
  </Head>;
};
