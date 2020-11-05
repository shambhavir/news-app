// import React from "react";
   import {Link } from "react-router-dom";
   import React from 'react';
   import TypeIt from "typeit-react";

   import DynamicFont from 'react-dynamic-font';

    function Page1() {
        return (
         
          <div className = "main" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', fontSize: '110px'}}>
           <div class="powr-weather" id="682de827_1604609677"></div><script src="https://www.powr.io/powr.js?platform=react"></script>
          
           <Link to="/app"><button>
              Your daily
            </button>
            </Link>
         

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
      .type("news")
      
      

      

      

      
    // Remember to return it!
    return instance;
  }}
  
/>
          </div>

        )

        }



    export default Page1;