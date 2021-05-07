import React from 'react'
import "./Heading.css";

function Heading() {
    return (
         <React.Fragment>
           <header>
                <h1>Heading level 1</h1>
                <h2>Heading level 2</h2>
                <h3>Heading level 3</h3>
                <h4>Heading level 4</h4>
                <h5>Heading level 5</h5>
                <h6>Heading level 6</h6>
           </header>

           <div>
                <span> test fonts size </span>
           </div>  
         </React.Fragment>
    )
}

export default Heading;
