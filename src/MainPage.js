import React, { Component } from 'react';
import './style/App.css';
import MainSlider from "./components/MainSlider";
import ForDriver from './components/ForDriver'
import TopTrip from './components/TopTrip'
import LoveDrive2Gether from './components/LoveDrive2Gether'
import Footer from './components/Footer'


class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <MainSlider/>
                <ForDriver/>
                <TopTrip/>
                <LoveDrive2Gether/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;
