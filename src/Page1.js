import { Link } from "react-router-dom";
import React from "react";
import TypeIt from "typeit-react";
import { Container, Header } from "semantic-ui-react";
import Footer from "./footer";
import AnalogClock from "analog-clock-react";
let options = {
  width: "200px",
  height: "300px",
  border: true,
  borderColor: "white",
  baseColor: " rgba(152, 6, 236, 0.884)",
  centerColor: "#459cff",
  centerBorderColor: "#fff",
  handColors: {
    second: "#d81c7a",
    minute: "#fff",
    hour: "#fff",
  },
  seconds: 1, 
  minutes: 57, 
  hours: 18, 
};

function Page1() {
  return (
    <Container>
      <style>{"body { background-color: rgb(217, 173, 226); }"}</style>
      <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
        <h1 class="ui header">
          <Link to="/app3">
            <button class="massive ui toggle purple button" tabindex="2">
              Technology
            </button>
          </Link>
          <Link to="/app">
            <button class="massive ui toggle purple button" tabindex="2">
              Entertainment
            </button>
          </Link>
          <Link to="/app2">
            <button class="massive ui toggle purple button" tabindex="2">
              Sports
            </button>
          </Link>
        </h1>

        <div
          class="clockComponent"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "up",
          }}
        >
          <AnalogClock {...options} />
        </div>
      </Header>
      <div></div>
      <div
        style={{
          padding: "30px",
          color: "purple",
          textAlign: "center",
          margin: 20,
          fontSize: "35px",
        }}
      >
        News. Your Way.
      </div>
      <div>
        <Header
          as="h2"
          style={{
            padding: "30px",
            color: "purple",
            textAlign: "center",
            margin: 20,
            fontSize: "150px",
          }}
        >
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("news")
                .pause(500)
                .delete(4)
                .type("செய்தி")
                .pause(500)
                .delete(6)
                .type("noticias")
                .pause(500)
                .delete(8)
                .type("Новости")
                .pause(500)
                .delete(7)
                .type("նորություններ")
                .pause(500)
                .delete(13)
                .type("hírek")
                .pause(500)
                .delete(5)
                .type("вести")
                .pause(500)
                .delete(5)
                .type("පුවත්")
                .pause(500)
                .delete(5)
                .type("ozi")
                .pause(500)
                .delete(3)
                .type("nuacht")
                .pause(500)
                .delete(6)
                .type("뉴스")
                .pause(500)
                .delete(1)
                .delete(1)
                .type("zprávy")
                .pause(500)
                .delete(6)
                .type("വാർത്ത")
                .pause(500)
                .delete("6")
                .type("aħbarijiet")
                .pause(500)
                .delete(10)
                .type("వార్తలు")
                .pause(500)
                .delete(7)
                .type("nouvelles")
                .pause(500)
                .delete(9)
                .type("vaovao")
                .pause(500)
                .delete(6)
                .type("nachrichten")
                .pause(500)
                .delete(11)
                .type("berita")
                .pause(500)
                .delete(6)
                .type("新闻")
                .pause(500)
                .delete(2)
                .type("ニュース")
                .pause(500)
                .delete(4)
                .type("ព័ត៌មាន")
                .pause(500)
                .delete(7)
                .type("Νέα")
                .pause(500)
                .delete(3)
                .type("мэдээ")
                .pause(500)
                .delete(5)
                .type("news");

              return instance;
            }}
          />
        </Header>
      </div>

      <div
        className="main"
        style={{
          color: "purple",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "150px",
        }}
      >
        <Header
          as="h2"
          style={{ color: "purple", textAlign: "center", margin: 20 }}
        ></Header>
      </div>

      <Footer />
    </Container>
  );
}

export default Page1;
