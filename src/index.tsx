import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'flowbite';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

ReactDOM.render(
    <div className="flex flex-col h-screen justify-between">
        <Header></Header>
        <div className="mb-auto min-h-full">
        <App />
        </div>
            <footer className="fixed inset-x-0 bottom-0 z-0"><Footer/></footer>

        
            


    </div>

, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
