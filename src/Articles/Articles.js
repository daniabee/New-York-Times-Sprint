import Article from "../Article/Article";
import "../Articles/Articles.css";

const Articles = ({ articles }) => {
  const allArticles = articles.map((item) => {
    return (
      <Article
        key={articles.indexOf(item)}
        id={articles.indexOf(item)}
        article={item}
      />
    );
  });

  return (
    <div>
      <h1 className="appTitle">New York Times Articles</h1>
      <div className="articles">{allArticles}</div>
    </div>
  );
};

export default Articles;
