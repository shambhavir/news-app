
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
    apiError: ""
  };

  searchForTopic = async topic => {
    try {
      this.setState({ loading: true });
      const response = await getEntertainment(topic);
      // const response2 = await getTechnology(topic)
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

      <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
        <TypeIt 
  getBeforeInit={instance => {
    instance

  
      .type("explore ")
      .type("entertainment")
      .pause(500)
      .delete(13)
      .type("technology")
      .pause(500)
      .delete(10)
      .type("sports")
      .pause(500)
      .delete(6)
      .type("your world")
    return instance;
  }}
  
/>
        </Header>
        <SearchBar searchForTopic={this.searchForTopic} />
        <p style={{ textAlign: "center" }}>
          Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
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

export default App;
