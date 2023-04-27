import React from "react";
import  "../home.css";

const Show = (props) => {

    return(
        <div className="show">
            <div className="rightside">
                 <img className="showimage"
                 alt=""
                 src={props.pic}
                 />
            </div>

            <div className="leftside">
                 <h1 className="name">{props.name}</h1>
                 <h4 className="details">{props.details}</h4>
            </div>
         </div>
    )
}

export default Show;