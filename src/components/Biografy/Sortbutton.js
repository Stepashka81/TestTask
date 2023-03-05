import React from "react";
import "./Biografy.css";




class SortButton extends React.Component {
    

    render() {
        const biography = this.props
        function byField(field) {
            return (a, b) => a[field] > b[field] ? 1 : -1;
          }
        
       

        return (     
             //<button onClick ={function() {console.log(biography);}}>
           
       <button onClick={()=>{console.log(this.props)}}>
{/* </button><button onClick={biography.sort(byField('information'))}> */}

          
        sort array
         </button>
        
        )

    };
}

export default SortButton;