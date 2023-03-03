import React from "react";
import "./Biografy.css";




class SortButton extends React.Component {
    

    render() {
        const biography = this.props
       
        
       

        return (     
             //<button onClick ={function() {console.log(biography);}}>
            

        <button onClick={()=>{console.log(this.props)}}> 
            
        sort array
         </button>
        
        )

    };
}

export default SortButton;