import './mycomponent.css';
import React from "react";

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="MyComponentsStyle">
        <div>Список покупок для {this.props.name}</div>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
export default ShoppingList