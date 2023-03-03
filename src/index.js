import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
// import Main from './Main/Main';
import BigLogo from './components/Biglogo/Biglogo';
import Mission from './components/Mission/Mission';
import Footer from './components/Footer/Footer';
import Tab from './components/Biografy/Tab';
import SortButton from './components/Biografy/Sortbutton';
import biography from './components/Biografy/My_arrays';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Header/>
    <BigLogo/>
    <Mission/>
   {/* <Main/> */}
   <Tab/>
   <SortButton  biography={biography}/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

