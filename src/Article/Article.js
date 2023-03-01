import { Link } from "react-router-dom";
import "../Article/Article.css";

const Article = ({ article, id }) => {
  return (
    <Link to={`/${id}`} className="article">
      <h1 className="articleTitle">{article.title}</h1>
      <img className="articleImg" src={article.multimedia[1].url} />
    </Link>
  );
};

export default Article;
