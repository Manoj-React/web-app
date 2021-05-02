import React from 'react';
import "./styles.css";

function LandingPage() {
  return (
    <React.Fragment>
      <h2> HTML5 semantic tags </h2>
          <header>
          <nav>
               <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/blog/">Blog</a></li>
               </ul>
          </nav>
         </header>

         <section>
               <h1> this my sections </h1>
         </section>
         
         <footer>
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/blog/">Blog</a></li>
               </ul>
         </footer>
        
    </React.Fragment>
  )
}

export default LandingPage;
