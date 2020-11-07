import React from "react";
import { getTechnology} from "./api";
import ArticleList from "./components/articleList";
import SearchBar from "./components/searchBar";
import { Container, Header } from "semantic-ui-react";
import { Button } from '@material-ui/core';
import './App.css';
import TypeIt from "typeit-react";
class App3 extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "" //how the API call data will be accepted and displayed 
  };

  searchForTopic = async topic => {
    try {
      this.setState({ loading: true });
      const response = await getTechnology(topic); //gets and displays articles relating to the category of technology
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
//below contains the searching component for technology related articles 
      <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
        <TypeIt 
  getBeforeInit={instance => {
    instance
      .type("explore ")
      .type("big tech")
      .pause(500)
      .delete(8)
      .type("artificial intelligence")
      .pause(500)
      .delete(23)
      .type("vaccines")
      .pause(500)
      .delete(8)
      .type("the tech world")
    return instance;
  }}
  
/>
        </Header>
        <style>{'body { background-color: rgb(217, 173, 226); }'}</style>

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

export default App3;
