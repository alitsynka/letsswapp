import React from 'react';
import './App.css';
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {CopyRight} from "./components/copyRight/CopyRight";
import {Partners} from "./components/parnters/Partners";
import {Header} from "./components/header/Header";


function App() {



    return (
        <div className="App">
            <div className="Wrapper">
                <Header/>
                <Main/>
                <Partners/>
                <div className={"Vector"}></div>
            </div>
            <Footer/>
            <CopyRight/>
        </div>
    )
}

export default App;
