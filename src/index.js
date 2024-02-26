import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import './styles/bootstrap.min.css';

const Index = () => {
    return (<div>
        <App />
    </div>);
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);