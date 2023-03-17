import React from "react";
import "./Apilearn.css";

export default class Apilearn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

componentDidMount(){
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    .then(res=>res.json())
    .then(
        (result)=>this.setState({
            isLoaded:true,
            items:result
        }),
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
        
        )
}
render() {
       
    const { error, isLoaded, items } = this.state;
   
    if (error) {
             return <p>Error{error.message}</p>
         } else if (!isLoaded) {
             return <p> Loading...</p>
         } else {
             return (
                 <ul>
                     {items.map(item=>(
                         <li key={item.r030}>
                             Курс {item.txt} на {item.exchangedate} дорівнює {item.rate}
                         </li>
                     )
                         )}
                 </ul>
             )
            
         }

}
}
 /*учебный  пример с коктейлями
 
 componentDidMount() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(res => res.json())
            .then(
                (result) => this.setState({
                    isLoaded: true,
                    items: result.drinks
                }),
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
       
        const { error, isLoaded, items } = this.state;
   
   if (error) {
            return <p>Error{error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item=>(
                        <li key={item.idDrink}>
                            {item.strDrink}
                        </li>
                    )
                        )}
                </ul>
            )
           
        }
       
     
    }*/


