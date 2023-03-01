import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../ArticleDetails/ArticleDetails.css";

const ArticleDetails = ({ articles }) => {
  const { id } = useParams();

  const found = articles[id];

  return (
    <div>
      <h1>{found.title}</h1>
      <img src={found.multimedia[1].url} />
      <p>"{found.abstract}"</p>
      <p>{found.byline}</p>
      <p>{found.published_date}</p>
      <Link to={found.short_url}>NYT Atricle</Link>
    </div>
  );
};

export default ArticleDetails;
