import React from "react";
   import {Link } from "react-router-dom";
//    import { Button, Form } from "semantic-ui-react"
 import { Container, Header, Button } from "semantic-ui-react";

    function newsChoice() {

        return (
//             <div className = "main" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', fontSize: '50px'}}>
         
          






//           </div>
<Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20, fontSize: "110px" }}>
        
        </Header>
        <p style={{ textAlign: "center", fontSize: "110px"}}>
          {/* Powered by <a href="https://newsapi.org/">NewsAPI.org</a> */}
        <Link to="/app3">
<button class="massive ui toggle pink button" tabindex = "2">
Technology
</button>
</Link>
<Link to="/app">
  <button class="massive ui toggle pink button" tabindex = "2">
  Entertainment 
</button>
</Link>
<Link to="/app2">
  <button class="massive ui toggle pink button" tabindex = "2">
  Sports 
</button>
</Link>
</p>
       
</Container>
         
        );

    }

    export default newsChoice;