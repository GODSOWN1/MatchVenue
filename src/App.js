import React from "react";
import "./resources/styles.css";
import Header from   "./components/Header";
import Footer from   "./components/Footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
import Pricing from  "./components/pricing";
import Location from  "./components/location";
import {Element} from "react-scroll";

function App() {
    return (
        <div className= "App">
            <Header />

            <Element name="featured">
            <Featured />
            </Element>

            <Element name="venueinfo">
            <VenueNfo />
            </Element>

            <Element name="highlights">
            <Highlights />
            </Element>

            <Element name="pricing">
            <Pricing />
            </Element>

            <Element name="location">
            <Location />
            </Element>

       {/*<div style={{backgroundColor:"red",  height:"800px"}}></div>
        <div style={{backgroundColor:"green",  height:"800px"}}></div>
        <div style={{backgroundColor:"blue",   height:"800px"}}></div>
        <div style={{backgroundColor:"yellow", height:"800px"}}></div>*/}
        <Footer />
        </div>
            
        
    );
}
export default App;