import axios from "axios";
import Head from "next/head";
import Header from "../layout/Header";
import { News } from "../interfaces/News";
import { CovidNews } from "../interfaces/Covid";
import ArticleCard from "../components/ArticleCard";
import CovidLink from "../components/CovidLink";

interface Props {
  news: News;
  covid: CovidNews;
}

const App = ({ news, covid }: Props) => {
  return (
    <>
      <Head>
        <title>All About News</title>
        <meta name="description" content="Latest news worldwide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container grid">
        <section className="grid__main">
          {news.articles.map((article, idx) => (
            <ArticleCard key={idx} articleNews={article} />
          ))}
        </section>

        <aside className="grid__sidebar">
          {covid.articles.map((article, idx) => (
            <CovidLink key={idx} article={article} />
          ))}
        </aside>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  require("dotenv").config();

  const resNews = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  );
  const dataNews = await resNews.data;

  const resCovid = await axios.get(
    `https://newsapi.org/v2/everything?q=covid&apiKey=${process.env.API_KEY}`
  );
  const dataCovid = await resCovid.data;

  return {
    props: { news: dataNews, covid: dataCovid },
  };
};

export default App;
