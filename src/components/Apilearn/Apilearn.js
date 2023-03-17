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
   //     console.log(items);
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
     
    }

}
