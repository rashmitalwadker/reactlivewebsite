import React from "react" ;
import web from "../src/images/pic4.jpg";
import {NavLink} from "react-router-dom";


const Card =  (props) => {

return(
<>
<div className ="col-md-6 col-10 mx-auto">
<div className="card">
  <img src={props.imgsrc}width="200px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
</>
);
};
export default Card;




