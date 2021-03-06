import React from "react";
import { getEntertainment} from "./api";
import ArticleList from "./components/articleList";
import SearchBar from "./components/searchBar";
import { Container, Header } from "semantic-ui-react";
import { Button } from '@material-ui/core';
import './App.css';
import TypeIt from "typeit-react";
class App extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "" //how all the article data will be accepted and stored 
  };

  searchForTopic = async topic => {
    try {
      this.setState({ loading: true });
      const response = await getEntertainment(topic); //gets articles relating to the category of entertainment 
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
//below contains the search tool for the entertaiment news section 
      <Container>
       <style>{'body { background-color: rgb(217, 173, 226); }'}</style>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
        <TypeIt 
  getBeforeInit={instance => {
    instance
      .type("explore ")
      .type("the bachlorette")
      .pause(500)
      .delete(15)
      .type("US politics")
      .pause(500)
      .delete(11)
      .type("SNL")
      .pause(500)
      .delete(3)
      .type("the world of entertainment")
    return instance;
  }}
  
/>
        </Header>
        <SearchBar searchForTopic={this.searchForTopic} />
        <p style={{ textAlign: "center" }}>
          Results from <a href="https://newsapi.org/">NewsAPI.org</a>
        </p>
        {loading && (
          <p style={{ textAlign: "center" }}>Fetching your daily scoop...</p> //loading the articles 
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

export default App;
