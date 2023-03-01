describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=mwbc3jnNCjCTXXmP6F8jDu02LM1YUmDm",
      {
        fixture: "example",
      }
    );
  });
  it("Should see a nav bar", () => {
    cy.get(".nav").contains("Home");
    cy.get(".nav").contains("Search Articles");
  });
  it("Should see a title", () => {
    cy.contains("New York Times Articles");
  });
  it("Should see a list of article thumbnails", () => {
    cy.get(".article")
      .eq(0)
      .contains("Brendan Fraser Wants to Be Worthy of His Comeback");
    cy.get(".articleImg")
      .eq(0)
      .should(
        "have.attr",
        "src",
        "https://static01.nyt.com/images/2023/03/02/multimedia/01projectionist-brendanfraser-01-lkjt/01projectionist-brendanfraser-01-lkjt-threeByTwoSmallAt2X.jpg"
      );
    cy.get(".article")
      .eq(1)
      .contains("Kandinsky Painting Sells for $44.9 Million at Auction");
    cy.get(".articleImg")
      .eq(1)
      .should(
        "have.attr",
        "src",
        "https://static01.nyt.com/images/2023/03/01/multimedia/01kandinsky-sale-jtzq/01kandinsky-sale-jtzq-threeByTwoSmallAt2X.jpg"
      );
    cy.get(".article")
      .eq(2)
      .contains(`Pharrell and Luxury Fashion’s Hip-Hop Obsession`);
    cy.get(".articleImg")
      .eq(2)
      .should(
        "have.attr",
        "src",
        "https://static01.nyt.com/images/2023/03/01/multimedia/01popcast-khwq/01popcast-khwq-threeByTwoSmallAt2X.jpg"
      );
  });
  it("Should see a details page when you click the thumbnail", () => {
    cy.get(".article").eq(0).click();
    cy.contains("Brendan Fraser Wants to Be Worthy of His Comeback");
    cy.get(".detailsImg").should(
      "have.attr",
      "src",
      "https://static01.nyt.com/images/2023/03/02/multimedia/01projectionist-brendanfraser-01-lkjt/01projectionist-brendanfraser-01-lkjt-threeByTwoSmallAt2X.jpg"
    );
    cy.contains(
      "“I’m aware of where I was, where I went and where I am now,” says the actor, who is nominated for an Oscar for his remarkable comeback in “The Whale.”"
    );
    cy.contains("By Kyle Buchanan");
    cy.contains("2023-03-01T12:58:24-05:00");
  });
  it("Should see the nav bar from the details page", () => {
    cy.get(".article").eq(0).click();
    cy.get(".nav").contains("Home").click();
  });
  it("Should search articles on search page and see results", () => {
    cy.intercept(
      "GET",
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=economics&api-key=mwbc3jnNCjCTXXmP6F8jDu02LM1YUmDm`,
      {
        fixture: "search",
      }
    );
    cy.get(".nav").contains("Search Articles").click();
    cy.contains("Search for NYT articles!");
    cy.get(".userInput").type("economics");
    cy.get(".searchButton").click();
    cy.contains("First Found");
    cy.contains("Second Found");
    cy.contains("Third Found");
  });
});
