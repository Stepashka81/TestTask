import React from "react";
import biography from "./My_arrays";
import BiographyEventList from "./Biographyeventlist";


function Tab(){
    return(
    <div>
        <h1>Our Biography</h1>
        <BiographyEventList biography={biography}/>

    </div>
    )
}
export default Tab