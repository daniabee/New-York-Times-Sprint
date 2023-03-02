import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../ArticleDetails/ArticleDetails.css";

const ArticleDetails = ({ articles }) => {
  const { id } = useParams();

  const found = articles[id];

  const published = found.published_date.split("T");

  return (
    <div className="details">
      <h1 className="detailsTitle">{found.title}</h1>
      <img className="detailsImg" src={found.multimedia[1].url} />
      <p className="info">{found.abstract}</p>
      <p className="info">{found.byline}</p>
      <p className="info">Published: {published[0]}</p>
      <Link to={found.short_url}>See Article</Link>
    </div>
  );
};

export default ArticleDetails;
