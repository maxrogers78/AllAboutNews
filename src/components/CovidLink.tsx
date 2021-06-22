import { Article } from "../interfaces/Covid";

interface Props {
  article: Article;
}

const CovidLink = ({ article }: Props) => {
  return (
    <div className="covid">
      <h3 className="covid__title">{article.title}</h3>
    </div>
  );
};

export default CovidLink;
