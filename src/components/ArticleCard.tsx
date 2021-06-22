/* eslint-disable @next/next/no-img-element */
import { Article } from "../interfaces/News";

interface Props {
  articleNews: Article;
}

const ArticleCard = ({ articleNews }: Props) => {
  const {
    title,
    author,
    content,
    description,
    publishedAt,
    url,
    urlToImage,
    source,
  } = articleNews;

  return (
    <div className="article">
      {urlToImage ? (
        <img className="article__image" src={urlToImage} alt={title} />
      ) : (
        <img
          className="article__image"
          src="/static/notfound.png"
          alt={title}
        />
      )}

      <div className="article__content">
        <h3 className="article__title">{title}</h3>
        <p className="article__source">{source.name}</p>

        {author && <p className="article__date">by {author}</p>}
      </div>
    </div>
  );
};

export default ArticleCard;
