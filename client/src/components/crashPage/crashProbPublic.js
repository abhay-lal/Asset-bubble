import Header from "../reuse/header";
import Speedometer from "../reuse/speedometer";
import countryData from "./countrydata";
import CountryStockIndex from "./country-stock-index-map";
import CountryStockIndexSidebar from "./country-stock-index-sidebar";
import parametersData from "./parametersData";
import ParameterIndexDisplay from "./parameterIndexDisplay";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import axios from "axios";
import {chartData} from "./chartData";
import PredictedChart from "./predictedChart";

export default function CrashProbPublic () {

    const countryMapCards = countryData.map((country) => {
        return (
            <CountryStockIndex
                {...country}
                key={country.id}
            />
        )
    })

    const chartHtml = chartData.map(data => {
        return (
                <PredictedChart
                    type={data.type}
                    vals={data.values}
                />
            );
    })

    const countrySideCards = countryData.map(country => {
        return (
            <CountryStockIndexSidebar
                {...country}
                key={country.id}
            />
        )
    });

    return (
        <main>
            <Header />

            <section className={"home-page"}>
                <div className={"side-info-container"}>

                    <div className={"headings"}>
                        <h2>Financial Statics</h2>
                        <h1>$1,287,572</h1>
                    </div>

                    <div style={{textAlign: 'center', marginBottom: '0.6rem'}}>
                        <h3>Current Market Caps</h3>
                    </div>

                    <div className={"gradient-hr"}></div>

                    <div className={"stocks-data-container"}>
                        <ul className={"stocks-list"}>
                            {countrySideCards}
                        </ul>
                    </div>

                    <div className={"threat-level"}>
                        <Speedometer
                            value={80}
                            text={40}
                            strokeWidth={8}
                        />
                    </div>

                    <div className={"opinion-container"}>
                        <Link to={"/comments"} className={"opinion"}>Share your opinion</Link>
                        <Link to={"/checkCrash"} className={"opinion"}>Custom Data</Link>
                    </div>




                </div>
                <div className={"map-container"}>
                    {countryMapCards}
                    <div className={"crash-parameters"}>
                        <ParameterIndexDisplay {...parametersData[0]} />
                        <div className={"vertical-line"}></div>
                        <ParameterIndexDisplay {...parametersData[1]} />
                        <ParameterIndexDisplay {...parametersData[2]} />
                        <ParameterIndexDisplay {...parametersData[3]} />
                    </div>
                </div>
            </section>
            <h1 style={{color: '#A5C9CA', textAlign: 'center', margin:'4rem'}}>Predict Data For Next Year</h1>
            <section className={'chart-Container'}>
                {chartHtml}
            </section>

        </main>
    )
}
