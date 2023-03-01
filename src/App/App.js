import "../App/App.css";
import "../Articles/Articles";
import { useEffect, useState } from "react";
import { getArticles } from "../apiCalls";
import Articles from "../Articles/Articles";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import Search from "../Search/Search";

// mwbc3jnNCjCTXXmP6F8jDu02LM1YUmDm

const App = () => {
  const [articles, setArticles] = useState([]);

  const getAllArticles = async () => {
    const data = await getArticles();
    setArticles(data);
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Articles articles={articles} />} />
        <Route
          exact
          path="/:id"
          element={<ArticleDetails articles={articles} />}
        />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
