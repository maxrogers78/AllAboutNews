import Head from "next/head";
import Header from "../layout/Header";

const App = () => {
  return (
    <>
      <Head>
        <title>All About News</title>
        <meta name="description" content="Latest news worldwide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container"></main>
    </>
  );
};

export default App;
