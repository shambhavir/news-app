import React from "react";
import { getSports} from "./api";
import ArticleList from "./components/articleList";
import SearchBar from "./components/searchBar";
import { Container, Header } from "semantic-ui-react";
import './App.css';
import TypeIt from "typeit-react";
class App2 extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "" //how the article data from the API calls will be accepted and displayed 
  };

  searchForTopic = async topic => {
    try {
      this.setState({ loading: true });
      const response = await getSports(topic); //getting articles relating to sports category 
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  render() {
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults
    } = this.state;
    return (
 //below contains the searching component for articles relating to sports 
      <Container>
        <style>{'body { background-color: rgb(217, 173, 226); }'}</style>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
        <TypeIt 
  getBeforeInit={instance => {
    instance
      .type("explore ")
      .type("NBA results")
      .pause(500)
      .delete(11)
      .type("Big 10")
      .pause(500)
      .delete(6)
      .type("the world of sports")
    return instance;
  }}
  
/>
        </Header>
        <SearchBar searchForTopic={this.searchForTopic} />
        <p style={{ textAlign: "center" }}>
          Results from <a href="https://newsapi.org/">NewsAPI.org</a>
        </p>
        {loading && (
          <p style={{ textAlign: "center" }}>Fetching your daily scoop...</p>
        )}
        {articles.length > 0 && (
          <Header as="h4" style={{ textAlign: "center", margin: 0 }}>
            Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
       
      </Container>
    );
  }
  
}

export default App2;
