export const getArticles = async () => {
  try {
    const response = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=mwbc3jnNCjCTXXmP6F8jDu02LM1YUmDm"
    );
    const data = await response.json();
    return data.results;
  } catch {
    throw new Error("There was a problem");
  }
};

export const searchArticles = async (search) => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=mwbc3jnNCjCTXXmP6F8jDu02LM1YUmDm`
    );
    const data = await response.json();
    return data.response.docs;
  } catch {
    throw new Error("There was a problem");
  }
};
