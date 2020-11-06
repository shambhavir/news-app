// import React from "react";
   import {Link } from "react-router-dom";
   import React from 'react';
   import TypeIt from "typeit-react";
  import newsChoice from "./newsChoice"; 
   import DynamicFont from 'react-dynamic-font';
   import { Button, Form,Container, Header } from "semantic-ui-react";

    function Page1() {
        return (
         <Container>
           <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
           <Link to="/app3">
<button class="massive ui toggle purple button" tabindex = "2">
Technology
</button>
</Link>
<Link to="/app">
  <button class="massive ui toggle purple button" tabindex = "2">
  Entertainment 
</button>
</Link>
<Link to="/app2">
  <button class="massive ui toggle purple button" tabindex = "2">
  Sports 
</button>
</Link>
           </Header>
           <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
             News. Your Way. 
             </Header>

             <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
             </Header>
             <Header as="h2" style={{ textAlign: "center", margin: 20 }}>

          <div className = "main" style={{color: 'purple', display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', fontSize: '200px'}}>
{/*           
           <Link to="/newsChoice"><button>
              Your daily
            </button>
            </Link> */}
         

            <TypeIt 
  getBeforeInit={instance => {
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
      .type("Nachrichten")
      .pause(500)
      .delete(11)
      .type("news");
    // Remember to return it!
    return instance;
  }}
  
/>
          </div>
          </Header>

          </Container>
        )

        }



    export default Page1;