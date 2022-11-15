import React from "react";
import Header from "../reuse/header";
import "../../css/home.css"
import {Link} from "react-router-dom";

export default function () {
    return (
        <main>
            <Header />

            <div className={"main-content"}>
                <h1>We are a distributed team</h1>
                <p className={"home-heading-text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <section className={"home-section"}>
                <div className={"model-button"}>
                    <Link to={"/crashProb"} className={"btn btn-white"}>Market Data</Link>
                    <Link to={"/checkCrash"} className={"btn btn-blue"}>Custom Data</Link>
                </div>

                <div className={"scroll-down"}>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

            </section>

        </main>
    )
}