import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main/Main';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/header';
import BigLogo from './components/Biglogo/Biglogo';
import Mission from './components/Mission/Mission';
import Footer from './components/Footer/Footer';
import ShoppingList  from './components/Mycomponent/Mycomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
let name1="Abra-cadabra";
root.render(
  <React.StrictMode>
   <Header/>
   <BigLogo/>
   <Mission/>
   <Main/> 

   <ShoppingList name="Stepan"/>
   <ShoppingList name="Volodya"/>
   <ShoppingList name={name1}/>
  
   <Footer/>
   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
