import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import './components/TrafficLight/TrafficLight.css'

// components
import Home from './Pages/Home';


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Home />);

